#include <stdio.h>
#include <string.h>
#pragma warning(disable:4996)
int main() {
    char s[1000000] = "";    //입력 문자열
    int a[26] = { 0, };    //a~z 사용횟수
    int max = 0;    //최대사용횟수
    int index = 0;    //최대사용 인덱스
    int count = 0;    //max의 개수

    scanf("%s", s);

    for (int i = 0; s[i] != '\0'; i++) {    //입력 길이만큼 검사
        if (s[i] < 97)
            s[i] += 32;
        a[s[i] - 97]++;
    }

    for (int h = 0; h < 26; h++) {
        if (a[h] > max) {    //최대사용횟수 탐색
            count = 0;
            max = a[h];
            index = h;
        }
        else if (a[h] == max) {
            count++;
        }
    }

    if (count == 0)
        printf("%c\n", index + 'A');
    else
        printf("?\n");

    return 0;
}