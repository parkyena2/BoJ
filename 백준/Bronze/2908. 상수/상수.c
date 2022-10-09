#include <stdio.h>
#include <string.h>

int main() {
    char A[4] = "";
    char B[4] = "";
    
    scanf("%s %s", A, B);
    
    char tmp = A[0]; 
    A[0] = A[2];
    A[2] = tmp;
    
    tmp = B[0];
    B[0] = B[2];
    B[2] = tmp;
    
    if (strcmp(A, B) > 0)
        printf("%s", A);
    else if (strcmp(A, B) < 0)
        printf("%s", B);
    
    return 0;
}