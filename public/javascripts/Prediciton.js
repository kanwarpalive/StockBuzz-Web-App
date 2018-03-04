/**
 * Created by kanwarpalmehra on 5/22/17.
 */
var arr = {
    max: function(array) {
        return Math.max.apply(null, array);
    },

    min: function(array) {
        return Math.min.apply(null, array);
    },

    range: function(array) {
        return arr.max(array) - arr.min(array);
    },

    midrange: function(array) {
        return arr.range(array) / 2;
    },

    sum: function(array) {
        var num = 0;
        for (var i = 0, l = array.length; i < l; i++) num += array[i];
        return num;
    },

    mean: function(array) {
        return arr.sum(array) / array.length;
    },

    median: function(array) {
        array.sort(function(a, b) {
            return a - b;
        });
        var mid = array.length / 2;
        return mid % 1 ? array[mid - 0.5] : (array[mid - 1] + array[mid]) / 2;
    },

    modes: function(array) {
        if (!array.length) return [];
        var modeMap = {},
            maxCount = 0,
            modes = [];

        array.forEach(function(val) {
            if (!modeMap[val]) modeMap[val] = 1;
            else modeMap[val]++;

            if (modeMap[val] > maxCount) {
                modes = [val];
                maxCount = modeMap[val];
            }
            else if (modeMap[val] === maxCount) {
                modes.push(val);
                maxCount = modeMap[val];
            }
        });
        return modes;
    },

    variance: function(array) {
        var mean = arr.mean(array);
        return arr.mean(array.map(function(num) {
            return Math.pow(num - mean, 2);
        }));
    },

    standardDeviation: function(array) {
        return Math.sqrt(arr.variance(array));
    },

    meanAbsoluteDeviation: function(array) {
        var mean = arr.mean(array);
        return arr.mean(array.map(function(num) {
            return Math.abs(num - mean);
        }));
    },

    zScores: function(array) {
        var mean = arr.mean(array);
        var standardDeviation = arr.standardDeviation(array);
        return array.map(function(num) {
            return (num - mean) / standardDeviation;
        });
    },

    fallsinrange:function(){

        //Treating the one time data as a one collected sample,
        // find sample mean, and standard deviation.
        // Z-score maps the distribution to the STANDARD NORMAL DISTRIBUTION,
        // Z-score bounds the interval to 95%
        // returning value if exceed, set Z-score upper range its expected it RISE
        // if it goes beyond lower limit its most likely to Fall.
        // but falling within the same range is quite Unpredictable.
        // when Confidence interval is 95%,
        // left tail and right tail both spans 0.025%
        var val= x;
        var sum= y;
       var val2= arr.mean().value - val;
       var val3=arr.standardDeviation().value/sum;
        return val2/val3;
    }
};




arr.average = arr.mean;