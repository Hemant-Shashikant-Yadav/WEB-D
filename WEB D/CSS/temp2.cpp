#include <bits/stdc++.h>
using namespace std;

int main()
{
    vector<int> v;
    int temp;

    while (cin >> temp)
    {
        v.push_back(temp);
    }

    // approach 1

    int minE = INT_MAX, maxE = INT_MIN;

    for (auto a : v)
    {
        minE = min(minE, a);
        maxE = max(maxE, a);
    }

    cout << maxE - minE << endl;

    // approach 2

    auto minIt = min_element(v.begin(), v.end());

    auto maxIt = max_element(v.begin(), v.end());

    cout << *maxIt - *minIt << endl;
    return 0;
}