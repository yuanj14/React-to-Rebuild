import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.StreamTokenizer;

public class Main {
    public static void main(String[] args) throws Exception {
        int[] H = new int[N];
        while(sc.hasNextInt()){
            int x = sc.nextInt();
            int h = sc.nextInt();
            int y = sc.nextInt();
            for(int i = x; i < y; i++) H[i] = Math.max(H[i], h);
        }
        int pos = 0;
        for(int i = 0; i <= N - 3 ; i++){
            if(pos != H[i]){
                pos= H[i];
                cont.append(i).append(' ').append(H[i]).append(' ');
            }
        }
        System.out.println(cont.toString());
    }


    static StringBuilder cont = new StringBuilder();
    static Luogu sc = new Luogu();
    static int gcd (int x, int y) {
        return y == 0 ? x : gcd(y, x % y);
    }
    static int lcm(int x, int y) {
        return x / gcd(x, y) * y;
    }
    static int N = 10000  + 5;
    static int mode = 1000000007;
}

class Luogu {
    StreamTokenizer st = new StreamTokenizer(new BufferedReader(new InputStreamReader(System.in)));

    public int nextInt() throws IOException {
        st.nextToken();
        return (int) st.nval;
    }

    public long nextLong() throws IOException {
        st.nextToken();
        return (long) st.nval;
    }

    public double nextDouble() throws IOException {
        st.nextToken();
        return st.nval;
    }

    public boolean hasNextInt() throws IOException {
        int tokenType = st.nextToken();
        boolean result = (tokenType == StreamTokenizer.TT_NUMBER) &&
                (st.nval == Math.floor(st.nval));
        st.pushBack();
        return result;
    }
}