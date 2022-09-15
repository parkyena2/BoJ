#include <stdio.h>

int main() {
    int a, b;
    scanf("%d %d", &a, &b);
    
    int c = (b % 100) % 10;
    int d = (b % 100) - c;
    int e = b - (b % 100);
    
    printf("%d\n", a*c);
    printf("%d\n", (a*d)/10);
    printf("%d\n", (a*e)/100);
    printf("%d\n", a*b);
}