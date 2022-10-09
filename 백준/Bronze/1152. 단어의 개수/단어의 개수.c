#include <stdio.h>
#include <string.h>

int main() {
    
    char s[1000000] = "";
    int count = 0;
    gets(s);
    
    char *ptr = strtok(s, " ");
    
    while (ptr != NULL) {
        count++;
        ptr = strtok(NULL, " ");
    }
    
    printf("%d\n", count);

    return 0;
}