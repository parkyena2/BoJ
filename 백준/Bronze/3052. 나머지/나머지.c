#include <stdio.h>
int main() {
    int a[10] = {};
    int b[10] = {};
    int result = 0;
    
    for(int i=0; i<10; i++) {
        scanf("%d", &a[i]);
        b[i] = a[i]%42;
    }
    
    //39 40 41 0 1 2 0 0 0 0
    for(int j=0; j<10; j++) {
        int count = 0;
        for(int k=j+1; k<10; k++) {
            if(b[j] == b[k]) count++;
        }
        if (count == 0) result++;
    }
    
    
    printf("%d\n", result);
    
    return 0;
}