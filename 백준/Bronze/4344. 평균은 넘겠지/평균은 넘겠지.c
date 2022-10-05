#include <stdio.h>
int main() {
    int c = 0;
    int n2 = 0;
    
    scanf("%d", &c);
    
    for(int i=0; i<c; i++) {
        int sum = 0;
        int count = 0;
        int n[1000] = {};
        
        scanf("%d", &n2);
        for(int j=0; j<n2; j++) {
            scanf("%d", &n[j]);
            sum += n[j];
        }
        
        double average = (double)sum/n2;
        
        for(int k=0; k<n2; k++) {
            if(n[k]>average) {
                count++;
            }
        }
        
        double average2 = (double)count*100/n2;
        printf("%.3f%%\n", average2);
    }
    
    return 0;
}