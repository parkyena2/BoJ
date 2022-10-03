#include <stdio.h>
int main() {
    int a, b, c, m;
    scanf("%d %d %d", &a, &b, &c);
    
    if (a == b && b == c)
        m = 10000 + a*1000;
    else if (a == b || a == c)
        m = 1000 + a*100;
    else if (b == c)
        m = 1000 + b*100;
    else {
        if (a > b && a > c)
            m = a*100;
        else if (b > a && b > c)
            m = b*100;
        else if (c > a && c > b)
            m = c*100;
    }
    
    printf("%d\n", m);
    
    return 0;
}