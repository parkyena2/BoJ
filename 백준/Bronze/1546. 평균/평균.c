#include <stdio.h>
int main() {
    int n, m = 0;
    double s, av = 0;
    int a[1000] = {};
    double b[1000] = {};
    
    scanf("%d", &n);
    for(int i=0; i<n; i++) {
        scanf("%d", &a[i]);
        if(m<a[i]) m = a[i];
    }
    
    for(int j=0; j<n; j++) {
        b[j] = (double)a[j]/m*100;
        s += b[j];
    }
    
    printf("%f\n", s/n);
    
    return 0;
}