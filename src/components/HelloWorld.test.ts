import {mount} from '@vue/test-utils'
import HelloWorld from "./HelloWorld.vue"

describe("HelloWorld",()=>{
  it("renders the title",()=>{
    const expectTitle="Test title message"
    const wrapper = mount(HelloWorld,{
      props:{
        msg: expectTitle
      }
    })
    const title = wrapper.find("[data-testid=title]")
    expect(title).toBeTruthy()
    expect(title.text()).toEqual(expectTitle)
  })
  it("has working button counter", async()=>{
    const wrapper = mount(HelloWorld,{
      props:{
        msg: "Test title"
      }
    })
    const btn = wrapper.find("button")
    expect(btn).toBeTruthy()
    expect(btn.text()).toEqual(`count is: 0`)

    await btn.trigger("click")
    expect(btn.text()).toEqual(`count is: 1`)
  })
})