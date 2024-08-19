function mincost(arr) {
    if (arr.length === 1) return 0; // If there's only one rope, no cost is needed to combine

    // Initialize a min-heap
    const heap = [];
    
    // Function to add elements to the heap
    function addToHeap(value) {
        heap.push(value);
        heap.sort((a, b) => a - b); // Sort to maintain heap property
    }
    
    // Add all ropes to the heap
    for (let i = 0; i < arr.length; i++) {
        addToHeap(arr[i]);
    }

    let totalCost = 0;

    while (heap.length > 1) {
        // Extract the two smallest elements
        const first = heap.shift(); // Remove the smallest element
        const second = heap.shift(); // Remove the next smallest element

        // The cost to combine these two ropes
        const cost = first + second;
        totalCost += cost;

        // Add the combined rope back to the heap
        addToHeap(cost);
    }

    return totalCost;
}

module.exports = mincost;

