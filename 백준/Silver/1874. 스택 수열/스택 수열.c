#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <string.h>

#define MAX_STACK_SIZE 100000
#define MAX_ARRAY_SIZE 100000

typedef int element;
element stack[MAX_STACK_SIZE];
element array[MAX_ARRAY_SIZE];
char result[MAX_ARRAY_SIZE * 2 + 1];
int tos = -1;
int tor = 0;

void push(int data);
int pop();
int top();

int main() {
    int n = 0;
    scanf("%d", &n);

    int can = 1;
    int num = 1;
    for (int i = 0; i < n; i++) {
        int data = 0;
        scanf("%d", &data);

        if (top() < data) {
            while (top() < data)
                push(num++);
        }
        else if (top() > data) {
            while (top() > data)
                pop();
            num--;
        }

        if (top() != data) {
            can = 0;
            break;
        }
        else {
            pop();
        }
    }

    if (can == 0) {
        printf("NO\n");
    }
    else {
        for (int i = 0; i < tor; i++) {
            printf("%c\n", result[i]);
        }
    }

    return 0;

}

void push(int data) {
    stack[++tos] = data;
    result[tor++] = '+';
}

int pop() {
    result[tor++] = '-';
    return stack[tos--];
}

int top() {
    if (tos == -1)
        return -1;
    else
        return stack[tos];
}