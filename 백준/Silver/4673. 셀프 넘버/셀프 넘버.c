#include <stdio.h>
int self(int n) {
    int c = n;
    while(n>0) {
        c += n%10;
        n /= 10;
    }
    return c;
}

//d(n) = n + n/10 + n%10

int main() {
    int isSelf[10001] = {};
    for(int i=1; i <= 10000; i++){
        if (self(i) <= 10000)
            isSelf[self(i)] = 1;
    }
    for(int j=1; j<=10000; j++) {
        if(isSelf[j] != 1) printf("%d\n", j);
    }
    
    return 0;
}