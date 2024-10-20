#include <iostream>
#include <vector>
using namespace std;

int getMinOperations(vector<int>& computationalTime) {
    int operations = 0;
    while (true) {
        bool allOdd = true; 
        for (int i = 0; i < computationalTime.size(); ++i) {
            if (computationalTime[i] % 2 == 0) {
                allOdd = false;  // Found an even number
                break;
            }
        }
        if (allOdd) {
            break;  
        }
        int maxEven = 0;

        for (int i = 0; i < computationalTime.size(); ++i) {
            if (computationalTime[i] % 2 == 0) {
                maxEven = max(maxEven, computationalTime[i]);
            }
        }
        for (int i = 0; i < computationalTime.size(); ++i) {
            if (computationalTime[i] == maxEven) {
                computationalTime[i] /= 2;
            }
        }
        operations++; 
    }
    return operations;
}

int main() {
    vector<int> computationalTime = {6, 2, 5, 1, 6, 2, 5};  // Example input
    cout << "Minimum operations: " << getMinOperations(computationalTime) << endl;
    return 0;
}
