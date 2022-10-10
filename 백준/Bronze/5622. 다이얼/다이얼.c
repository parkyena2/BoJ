#include <stdio.h>
#include <string.h>

int num(char c);

int main() {
    char gm[15] = "";
    scanf("%s", gm);
    
    int i = 0;
    int count = 0;
    int length = strlen(gm);
    
    while(i<length && gm != NULL) {
        count += num(gm[i]);
        i++;
    }
    
    printf("%d\n", count);
    
    return 0;
}

int num(char c) {
    switch(c) {
        case 'A':
        case 'B':
        case 'C':
            return 3;
        case 'D':
        case 'E':
        case 'F':
            return 4;
        case 'G':
        case 'H':
        case 'I':
            return 5;
        case 'J':
        case 'K':
        case 'L':
            return 6;
        case 'M':
        case 'N':
        case 'O':
            return 7;
        case 'P':
        case 'Q':
        case 'R':
        case 'S':
            return 8;
        case 'T':
        case 'U':
        case 'V':
            return 9;
        case 'W':
        case 'X':
        case 'Y':
        case 'Z':
            return 10;
        }
}