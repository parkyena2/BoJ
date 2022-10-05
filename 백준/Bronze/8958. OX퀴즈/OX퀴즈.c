#include <stdio.h>
#include <string.h>
#pragma warning(disable:4996)
int main() {
    int n;
    char a[80] = "";

    scanf("%d", &n);    //테스트케이스 개수 입력

    for (int i = 0; i < n; i++) {
        scanf("%s", a);    //각 테스트케이스 입력

        int count = 0;    // 점수들 초기화
        int score = 0;
        int j = 0;

        while (j<=strlen(a)) {    //테스트케이스 점수 계산
            if (a[j] == 'O') {
                count++;
                score += count;
            }
            else if (a[j] == 'X')
                count = 0;
            j++;
        }

        printf("%d\n", score);
    }

    return 0;
}