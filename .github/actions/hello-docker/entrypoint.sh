#!bin/sh

# make file executable

echo "Hello $1"

# communication to runner/action
# when loggin to stdout use specific format
echo "::debug::This is example debug message"

echo "::warning::This is example debug message"

echo "::error::This is example debug message"

# hiding variable
echo "::add-mask::$1"
echo "Hello $1"


# print date and time to runner as output
time=$(date)
echo "::set-output name=time::$time"

echo "::group::Example expandable group"
echo "this is some log line in group 1"
echo "this is some log line in group 2"
echo "this is some log line in grou 1"
echo "::endgroup::"

# set enviroment variable to runner
echo "::set-env name=HELLO::hello"