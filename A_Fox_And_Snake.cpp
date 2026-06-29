#include <iostream>
#include <string>
using namespace std;

int main()
{
    int n, m;
    cin >> n >> m;

    for (int i = 0; i < n; i++)
    {
        if (i % 2 == 0)
        {
            // Full row of '#'
            cout << string(m, '#') << endl;
        }
        else
        {
            if ((i / 2) % 2 == 0)
            {
                // Snake on the right
                cout << string(m - 1, '.') << "#" << endl;
            }
            else
            {
                // Snake on the left
                cout << "#" << string(m - 1, '.') << endl;
            }
        }
    }

    return 0;
}