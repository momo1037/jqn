```bash
# use npm
echo '{"a": {"b": 1}}' | npx jqn 'a.b'
# out => 1

# or install globally
npm i -g jqn
echo '{"a": {"b": 1}}' | jqn 'a.b'
# out => 1
```
