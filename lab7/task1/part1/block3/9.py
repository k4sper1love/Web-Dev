n = int(input())
nulls = 0
for _ in range(n):
    if(int(input()) == 0):
        nulls += 1
print(nulls)