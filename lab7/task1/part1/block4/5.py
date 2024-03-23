n = int(input())
arr = list(map(int, input().split()))
same = False
for i in range(1, n):
    if arr[i] * arr[i - 1] > 0:
       same = True
       break
if same:
    print("YES")
else:
    print("NO")