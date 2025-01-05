#include <bits/stdc++.h>
using namespace std;

int main()
{
    // int n;
    // cin >> n;

    // vector<int> v(n);

    // for (int i = 0; i < n; i++)
    // {
    //     cin >> v[i];
    // }

    vector<int> v;
    int x;
    while (cin >> x) //EoF
    {
        v.push_back(x);
    }
    int n = v.size();

    float avg = 0;

    for (int i = 0; i < n; i++)
    {
        avg += v[i];
    }

    avg = avg / (float)n;

    cout << avg << endl;

    return 0;
}