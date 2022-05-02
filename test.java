public class test {
    public static void name(String args[]) {
        int A[] = {0, 11, 3, 15, 6, 19, 7, 23};
        System.out.println( sum( A) );
    }
    public static int sum(int x[]) {
        int a = 0;
        for( int n=0 ; n < x.length ; n++)
            a += x[n];
        return(a);
    }
}