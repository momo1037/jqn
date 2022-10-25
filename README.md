```bash
# use npx
echo '{"a":{"b":1}}' | npx jqn '.a.b'
# out => 1

# or install globally
npm i -g jqn
echo '{"a":{"b":1}}' | jqn '.a.b'
# output => 1

# support js functions
echo '{"a":{"b":[1,2,3,4]}}' | jqn '.a.b.filter(v=>v>2)[0]'
# output => 3
```