#include <stdio.h>

int main() {
    int n, a, b, c, d, r;
    scanf("%d", &n);
    if(n<10) n*=10;
    
    r = n;
    int cycle = 0;
    while(1) {
        a = n/10;
        b = n%10;
        c = (a+b)%10;
        d = (b*10) + c;
        
        n = d;
        cycle++;
        
        if(d == r) break;
    }
    
    printf("%d", cycle);
    
    return 0;
}