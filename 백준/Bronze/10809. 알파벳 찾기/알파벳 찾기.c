#include <stdio.h>

int main() {
    char a[100] = "";
    scanf("%s", a);
    
    for(int i='a'; i<='z'; i++) {
        int j=0;
        int isExist = 0;
        while(a[j] != '\0') {
            if(a[j] == i) {
                printf("%d ", j);
                isExist = 1;
                break;
            }
            j++;
        }
        if(isExist == 0) printf("-1 ");
    }
    
    return 0;
}