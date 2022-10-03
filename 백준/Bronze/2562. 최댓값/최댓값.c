#include <stdio.h>
int main() {
    int a[9] = {};
    int index, max = 0;
    for(int i=0; i<9; i++){
        scanf("%d", &a[i]);
        if(a[i]>max) {
            max = a[i];
            index = i+1;
        }
    }
    
    printf("%d\n%d", max, index);
    
    return 0;
}