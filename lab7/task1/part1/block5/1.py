def min(a, b, c, d):
    return min(min(min(a, b), c), d)
a, b, c, d = map(int, input().split())
print(min(a, b, c, d))