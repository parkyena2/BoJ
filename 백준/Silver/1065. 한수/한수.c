#include <stdio.h>

int rseq(int n) {
    int a[3] = {0};

    int i = 0;
    while(n>0) {    //각 자리수 분리
        a[i] = n % 10;
        n /= 10;
        i++;
    }

    int isSeq = 0;
    if(a[0]-a[1] == a[1]-a[2]) isSeq = 1;
    return isSeq;
}

int main() {
    int n, count = 0;
    scanf("%d", &n);
    
    for(int i=1; i<=n; i++) {
        if (i < 100) count++;
        else if (i != 1000)
            if(rseq(i) == 1) count++;
    }
    
    printf("%d\n", count);
    
    return 0;
}