#include <stdio.h>
int main() {
    int h, m, t;
    scanf("%d %d", &h, &m);
    scanf("%d", &t);
    
    if (m + (t%60) < 60) {
        h += t/60;
        m += t%60;
    }
    else if (m + (t%60) >= 60) {
        h += t/60 + 1;
        m += t%60 - 60;
    }
    
    if (h >= 24)
        h -= 24;

    printf("%d %d", h, m);
}

/*
21 50
195 -> 3 15
1 5
*/