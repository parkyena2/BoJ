#include <stdio.h>
#include <string.h>
#define _CRT_SECURE_NO_WARNINGS

#define QUEUE_SIZE 10000
#define BUFFER_SIZE 20

void push(int data);
void pop();
void size();
void empty();
void front();
void back();

typedef int element;
element queue[QUEUE_SIZE];
int foq = -1;
int boq = -1;

int main() {
    int n = 0;
    scanf("%d", &n);

    while (n > 0) {
        char command[BUFFER_SIZE];
        scanf("%s", command);

        if (strcmp(command, "push") == 0) {
            int data = 0;
            scanf("%d", &data);
            push(data);
        }
        else if (strcmp(command, "pop") == 0)
            pop();
        else if (strcmp(command, "size") == 0)
            size();
        else if (strcmp(command, "empty") == 0)
            empty();
        else if (strcmp(command, "front") == 0)
            front();
        else if (strcmp(command, "back") == 0)
            back();

        n--;
    }
}

void push(int data) {
    queue[++boq] = data;
}

void pop() {
    if (foq == boq)
        printf("-1\n");
    else
        printf("%d\n", queue[++foq]);
}

void size() {
    printf("%d\n", boq - foq);
}

void empty() {
    if (foq == boq)
        printf("1\n");
    else
        printf("0\n");
}

void front() {
    if (foq == boq)
        printf("-1\n");
    else
        printf("%d\n", queue[foq + 1]);
}

void back() {
    if (foq == boq)
        printf("-1\n");
    else
        printf("%d\n", queue[boq]);
}