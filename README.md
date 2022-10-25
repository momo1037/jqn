# jqn

command line json parser like jq

## Usage

```bash
# use npx
echo '{"a":{"b":1}}' | npx jqn .a.b
# output => 1

# or install globally
npm i -g jqn
echo '{"a":{"b":1}}' | jqn .a.b
# output => 1

# support array functions
echo '{"a":{"b":[1,2,3,4]}}' | jqn '.a.b.filter(v=>v>2)[0]'
# output => 3

# support any js code (when path does not start with a dot)
# note: only the first $ will be replaced with data, so if you want to use data more than once, you can store it in a variable
echo '{"a":{"b":1}}' | jqn 'Object.keys($)[0]'
# output => a

echo '{"a":1,"b":2}' | jqn 'x=$;delete x.a;JSON.stringify(x)'
# output => {"b":2}
```

## Warning

jqn uses eval to parse json, which allows it to support a wider range of input formats, such as json with single quotes or unquoted keys, but this raises security issues; make sure the source of the json is trusted.
