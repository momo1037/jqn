# jqn

[![](https://img.shields.io/npm/v/jqn)](https://www.npmjs.com/package/jqn)
![](https://img.shields.io/npm/l/jqn)

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

# support any js code (when path does not starts with a dot)
echo '{"a":{"b":1}}' | jqn 'Object.keys($)[0]'
# output => a

echo '{"a":1,"b":2}' | jqn 'delete $.a;JSON.stringify($)'
# output => {"b":2}
```
