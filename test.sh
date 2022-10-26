alias jqn='node main.js'

echo '{"a":{"b":1}}' | jqn .a.b
# output => 1

echo '{"a":{"b":1}}' | jqn .a.b
# output => 1

echo '{"a":{"b":[1,2,3,4]}}' | jqn '.a.b.filter(v=>v>2)[0]'
# output => 3

echo '{"a":{"b":1}}' | jqn 'Object.keys($)[0]'
# output => a

echo '{"a":1,"b":2}' | jqn 'delete $.a;JSON.stringify($)'
# output => {"b":2}
