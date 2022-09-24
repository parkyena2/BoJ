#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <string.h>

#define STACK_SIZE 10000
#define BUFFER_SIZE 20

typedef int element;
element stack[STACK_SIZE];
int tos = -1;

void push(int data);
void pop();
void size();
void empty();
void top();

int main() {
    char command[BUFFER_SIZE];
    int n = 0;
    scanf("%d", &n);

    while (n > 0) {
        scanf("%s", command);

        if (strcmp(command, "push") == 0) {
            int data;
            scanf("%d", &data);
            push(data);
        }
        if (strcmp(command, "pop") == 0)
            pop();
        if (strcmp(command, "size") == 0)
            size();
        if (strcmp(command, "empty") == 0)
            empty();
        if (strcmp(command, "top") == 0)
            top();

        n--;
    }
}

void push(int data) {
    stack[++tos] = data;
}

void pop() {
    if (tos == -1)
        printf("-1\n");
    else {
        printf("%d\n", stack[tos--]);
    }
}

void size() {
    printf("%d\n", tos + 1);
}

void empty() {
    if (tos == -1)
        printf("1\n");
    else
        printf("0\n");
}

void top() {
    if (tos == -1)
        printf("-1\n");
    else
        printf("%d\n", stack[tos]);
}