/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 384.0, "minX": 0.0, "maxY": 8732.0, "series": [{"data": [[0.0, 384.0], [0.1, 438.0], [0.2, 441.0], [0.3, 442.0], [0.4, 443.0], [0.5, 443.0], [0.6, 443.0], [0.7, 444.0], [0.8, 444.0], [0.9, 444.0], [1.0, 445.0], [1.1, 445.0], [1.2, 445.0], [1.3, 445.0], [1.4, 446.0], [1.5, 446.0], [1.6, 446.0], [1.7, 446.0], [1.8, 447.0], [1.9, 447.0], [2.0, 447.0], [2.1, 447.0], [2.2, 447.0], [2.3, 447.0], [2.4, 448.0], [2.5, 448.0], [2.6, 448.0], [2.7, 448.0], [2.8, 448.0], [2.9, 449.0], [3.0, 449.0], [3.1, 449.0], [3.2, 449.0], [3.3, 449.0], [3.4, 449.0], [3.5, 449.0], [3.6, 449.0], [3.7, 450.0], [3.8, 450.0], [3.9, 450.0], [4.0, 450.0], [4.1, 450.0], [4.2, 450.0], [4.3, 450.0], [4.4, 450.0], [4.5, 450.0], [4.6, 451.0], [4.7, 451.0], [4.8, 451.0], [4.9, 451.0], [5.0, 451.0], [5.1, 451.0], [5.2, 451.0], [5.3, 451.0], [5.4, 451.0], [5.5, 452.0], [5.6, 452.0], [5.7, 452.0], [5.8, 452.0], [5.9, 452.0], [6.0, 452.0], [6.1, 452.0], [6.2, 452.0], [6.3, 452.0], [6.4, 452.0], [6.5, 452.0], [6.6, 452.0], [6.7, 452.0], [6.8, 452.0], [6.9, 453.0], [7.0, 453.0], [7.1, 453.0], [7.2, 453.0], [7.3, 453.0], [7.4, 453.0], [7.5, 453.0], [7.6, 453.0], [7.7, 453.0], [7.8, 453.0], [7.9, 453.0], [8.0, 453.0], [8.1, 454.0], [8.2, 454.0], [8.3, 454.0], [8.4, 454.0], [8.5, 454.0], [8.6, 454.0], [8.7, 454.0], [8.8, 454.0], [8.9, 454.0], [9.0, 454.0], [9.1, 454.0], [9.2, 454.0], [9.3, 454.0], [9.4, 454.0], [9.5, 454.0], [9.6, 454.0], [9.7, 454.0], [9.8, 455.0], [9.9, 455.0], [10.0, 455.0], [10.1, 455.0], [10.2, 455.0], [10.3, 455.0], [10.4, 455.0], [10.5, 455.0], [10.6, 455.0], [10.7, 455.0], [10.8, 455.0], [10.9, 455.0], [11.0, 455.0], [11.1, 455.0], [11.2, 455.0], [11.3, 456.0], [11.4, 456.0], [11.5, 456.0], [11.6, 456.0], [11.7, 456.0], [11.8, 456.0], [11.9, 456.0], [12.0, 456.0], [12.1, 456.0], [12.2, 456.0], [12.3, 456.0], [12.4, 456.0], [12.5, 456.0], [12.6, 456.0], [12.7, 457.0], [12.8, 457.0], [12.9, 457.0], [13.0, 457.0], [13.1, 457.0], [13.2, 457.0], [13.3, 457.0], [13.4, 457.0], [13.5, 457.0], [13.6, 457.0], [13.7, 457.0], [13.8, 457.0], [13.9, 457.0], [14.0, 458.0], [14.1, 458.0], [14.2, 458.0], [14.3, 458.0], [14.4, 458.0], [14.5, 458.0], [14.6, 458.0], [14.7, 458.0], [14.8, 458.0], [14.9, 458.0], [15.0, 458.0], [15.1, 459.0], [15.2, 459.0], [15.3, 459.0], [15.4, 459.0], [15.5, 459.0], [15.6, 459.0], [15.7, 459.0], [15.8, 459.0], [15.9, 459.0], [16.0, 459.0], [16.1, 459.0], [16.2, 459.0], [16.3, 460.0], [16.4, 460.0], [16.5, 460.0], [16.6, 460.0], [16.7, 460.0], [16.8, 460.0], [16.9, 460.0], [17.0, 460.0], [17.1, 460.0], [17.2, 460.0], [17.3, 460.0], [17.4, 461.0], [17.5, 461.0], [17.6, 461.0], [17.7, 461.0], [17.8, 461.0], [17.9, 461.0], [18.0, 461.0], [18.1, 461.0], [18.2, 461.0], [18.3, 461.0], [18.4, 461.0], [18.5, 461.0], [18.6, 462.0], [18.7, 462.0], [18.8, 462.0], [18.9, 462.0], [19.0, 462.0], [19.1, 462.0], [19.2, 462.0], [19.3, 462.0], [19.4, 462.0], [19.5, 462.0], [19.6, 462.0], [19.7, 462.0], [19.8, 463.0], [19.9, 463.0], [20.0, 463.0], [20.1, 463.0], [20.2, 463.0], [20.3, 463.0], [20.4, 463.0], [20.5, 463.0], [20.6, 463.0], [20.7, 463.0], [20.8, 464.0], [20.9, 464.0], [21.0, 464.0], [21.1, 464.0], [21.2, 464.0], [21.3, 464.0], [21.4, 464.0], [21.5, 464.0], [21.6, 464.0], [21.7, 464.0], [21.8, 464.0], [21.9, 464.0], [22.0, 465.0], [22.1, 465.0], [22.2, 465.0], [22.3, 465.0], [22.4, 465.0], [22.5, 465.0], [22.6, 465.0], [22.7, 465.0], [22.8, 465.0], [22.9, 465.0], [23.0, 465.0], [23.1, 465.0], [23.2, 466.0], [23.3, 466.0], [23.4, 466.0], [23.5, 466.0], [23.6, 466.0], [23.7, 466.0], [23.8, 466.0], [23.9, 466.0], [24.0, 466.0], [24.1, 467.0], [24.2, 467.0], [24.3, 467.0], [24.4, 467.0], [24.5, 467.0], [24.6, 467.0], [24.7, 467.0], [24.8, 467.0], [24.9, 467.0], [25.0, 468.0], [25.1, 468.0], [25.2, 468.0], [25.3, 468.0], [25.4, 468.0], [25.5, 468.0], [25.6, 468.0], [25.7, 468.0], [25.8, 468.0], [25.9, 468.0], [26.0, 468.0], [26.1, 469.0], [26.2, 469.0], [26.3, 469.0], [26.4, 469.0], [26.5, 469.0], [26.6, 469.0], [26.7, 469.0], [26.8, 469.0], [26.9, 469.0], [27.0, 469.0], [27.1, 470.0], [27.2, 470.0], [27.3, 470.0], [27.4, 470.0], [27.5, 470.0], [27.6, 470.0], [27.7, 470.0], [27.8, 470.0], [27.9, 470.0], [28.0, 470.0], [28.1, 470.0], [28.2, 470.0], [28.3, 471.0], [28.4, 471.0], [28.5, 471.0], [28.6, 471.0], [28.7, 471.0], [28.8, 471.0], [28.9, 471.0], [29.0, 471.0], [29.1, 471.0], [29.2, 471.0], [29.3, 471.0], [29.4, 472.0], [29.5, 472.0], [29.6, 472.0], [29.7, 472.0], [29.8, 472.0], [29.9, 472.0], [30.0, 472.0], [30.1, 472.0], [30.2, 472.0], [30.3, 472.0], [30.4, 472.0], [30.5, 473.0], [30.6, 473.0], [30.7, 473.0], [30.8, 473.0], [30.9, 473.0], [31.0, 473.0], [31.1, 473.0], [31.2, 473.0], [31.3, 473.0], [31.4, 473.0], [31.5, 473.0], [31.6, 474.0], [31.7, 474.0], [31.8, 474.0], [31.9, 474.0], [32.0, 474.0], [32.1, 474.0], [32.2, 474.0], [32.3, 474.0], [32.4, 474.0], [32.5, 475.0], [32.6, 475.0], [32.7, 475.0], [32.8, 475.0], [32.9, 475.0], [33.0, 475.0], [33.1, 475.0], [33.2, 475.0], [33.3, 475.0], [33.4, 475.0], [33.5, 476.0], [33.6, 476.0], [33.7, 476.0], [33.8, 476.0], [33.9, 476.0], [34.0, 476.0], [34.1, 476.0], [34.2, 476.0], [34.3, 476.0], [34.4, 476.0], [34.5, 476.0], [34.6, 476.0], [34.7, 477.0], [34.8, 477.0], [34.9, 477.0], [35.0, 477.0], [35.1, 477.0], [35.2, 477.0], [35.3, 477.0], [35.4, 477.0], [35.5, 477.0], [35.6, 478.0], [35.7, 478.0], [35.8, 478.0], [35.9, 478.0], [36.0, 478.0], [36.1, 478.0], [36.2, 478.0], [36.3, 478.0], [36.4, 478.0], [36.5, 479.0], [36.6, 479.0], [36.7, 479.0], [36.8, 479.0], [36.9, 479.0], [37.0, 479.0], [37.1, 479.0], [37.2, 479.0], [37.3, 479.0], [37.4, 479.0], [37.5, 480.0], [37.6, 480.0], [37.7, 480.0], [37.8, 480.0], [37.9, 480.0], [38.0, 480.0], [38.1, 480.0], [38.2, 480.0], [38.3, 480.0], [38.4, 480.0], [38.5, 481.0], [38.6, 481.0], [38.7, 481.0], [38.8, 481.0], [38.9, 481.0], [39.0, 481.0], [39.1, 481.0], [39.2, 481.0], [39.3, 481.0], [39.4, 481.0], [39.5, 481.0], [39.6, 481.0], [39.7, 482.0], [39.8, 482.0], [39.9, 482.0], [40.0, 482.0], [40.1, 482.0], [40.2, 482.0], [40.3, 482.0], [40.4, 482.0], [40.5, 482.0], [40.6, 482.0], [40.7, 483.0], [40.8, 483.0], [40.9, 483.0], [41.0, 483.0], [41.1, 483.0], [41.2, 483.0], [41.3, 483.0], [41.4, 483.0], [41.5, 483.0], [41.6, 483.0], [41.7, 484.0], [41.8, 484.0], [41.9, 484.0], [42.0, 484.0], [42.1, 484.0], [42.2, 484.0], [42.3, 484.0], [42.4, 484.0], [42.5, 484.0], [42.6, 484.0], [42.7, 485.0], [42.8, 485.0], [42.9, 485.0], [43.0, 485.0], [43.1, 485.0], [43.2, 485.0], [43.3, 485.0], [43.4, 485.0], [43.5, 485.0], [43.6, 485.0], [43.7, 486.0], [43.8, 486.0], [43.9, 486.0], [44.0, 486.0], [44.1, 486.0], [44.2, 486.0], [44.3, 486.0], [44.4, 486.0], [44.5, 486.0], [44.6, 486.0], [44.7, 487.0], [44.8, 487.0], [44.9, 487.0], [45.0, 487.0], [45.1, 487.0], [45.2, 487.0], [45.3, 487.0], [45.4, 487.0], [45.5, 487.0], [45.6, 488.0], [45.7, 488.0], [45.8, 488.0], [45.9, 488.0], [46.0, 488.0], [46.1, 488.0], [46.2, 488.0], [46.3, 488.0], [46.4, 488.0], [46.5, 488.0], [46.6, 488.0], [46.7, 488.0], [46.8, 489.0], [46.9, 489.0], [47.0, 489.0], [47.1, 489.0], [47.2, 489.0], [47.3, 489.0], [47.4, 489.0], [47.5, 489.0], [47.6, 489.0], [47.7, 489.0], [47.8, 489.0], [47.9, 489.0], [48.0, 490.0], [48.1, 490.0], [48.2, 490.0], [48.3, 490.0], [48.4, 490.0], [48.5, 490.0], [48.6, 490.0], [48.7, 490.0], [48.8, 490.0], [48.9, 490.0], [49.0, 490.0], [49.1, 490.0], [49.2, 490.0], [49.3, 490.0], [49.4, 491.0], [49.5, 491.0], [49.6, 491.0], [49.7, 491.0], [49.8, 491.0], [49.9, 491.0], [50.0, 491.0], [50.1, 491.0], [50.2, 491.0], [50.3, 491.0], [50.4, 492.0], [50.5, 492.0], [50.6, 492.0], [50.7, 492.0], [50.8, 492.0], [50.9, 492.0], [51.0, 492.0], [51.1, 492.0], [51.2, 492.0], [51.3, 492.0], [51.4, 492.0], [51.5, 493.0], [51.6, 493.0], [51.7, 493.0], [51.8, 493.0], [51.9, 493.0], [52.0, 493.0], [52.1, 493.0], [52.2, 493.0], [52.3, 493.0], [52.4, 493.0], [52.5, 494.0], [52.6, 494.0], [52.7, 494.0], [52.8, 494.0], [52.9, 494.0], [53.0, 494.0], [53.1, 494.0], [53.2, 494.0], [53.3, 494.0], [53.4, 494.0], [53.5, 494.0], [53.6, 494.0], [53.7, 494.0], [53.8, 495.0], [53.9, 495.0], [54.0, 495.0], [54.1, 495.0], [54.2, 495.0], [54.3, 495.0], [54.4, 495.0], [54.5, 495.0], [54.6, 496.0], [54.7, 496.0], [54.8, 496.0], [54.9, 496.0], [55.0, 496.0], [55.1, 496.0], [55.2, 496.0], [55.3, 496.0], [55.4, 496.0], [55.5, 497.0], [55.6, 497.0], [55.7, 497.0], [55.8, 497.0], [55.9, 497.0], [56.0, 497.0], [56.1, 497.0], [56.2, 497.0], [56.3, 497.0], [56.4, 497.0], [56.5, 497.0], [56.6, 498.0], [56.7, 498.0], [56.8, 498.0], [56.9, 498.0], [57.0, 498.0], [57.1, 498.0], [57.2, 498.0], [57.3, 498.0], [57.4, 498.0], [57.5, 498.0], [57.6, 499.0], [57.7, 499.0], [57.8, 499.0], [57.9, 499.0], [58.0, 499.0], [58.1, 499.0], [58.2, 499.0], [58.3, 499.0], [58.4, 499.0], [58.5, 500.0], [58.6, 500.0], [58.7, 500.0], [58.8, 500.0], [58.9, 500.0], [59.0, 500.0], [59.1, 500.0], [59.2, 500.0], [59.3, 500.0], [59.4, 501.0], [59.5, 501.0], [59.6, 501.0], [59.7, 501.0], [59.8, 501.0], [59.9, 501.0], [60.0, 501.0], [60.1, 502.0], [60.2, 502.0], [60.3, 502.0], [60.4, 502.0], [60.5, 502.0], [60.6, 502.0], [60.7, 502.0], [60.8, 503.0], [60.9, 503.0], [61.0, 503.0], [61.1, 503.0], [61.2, 503.0], [61.3, 504.0], [61.4, 504.0], [61.5, 504.0], [61.6, 504.0], [61.7, 504.0], [61.8, 504.0], [61.9, 505.0], [62.0, 505.0], [62.1, 505.0], [62.2, 505.0], [62.3, 505.0], [62.4, 505.0], [62.5, 505.0], [62.6, 506.0], [62.7, 506.0], [62.8, 506.0], [62.9, 506.0], [63.0, 506.0], [63.1, 506.0], [63.2, 507.0], [63.3, 507.0], [63.4, 507.0], [63.5, 507.0], [63.6, 507.0], [63.7, 507.0], [63.8, 508.0], [63.9, 508.0], [64.0, 508.0], [64.1, 508.0], [64.2, 508.0], [64.3, 508.0], [64.4, 509.0], [64.5, 509.0], [64.6, 509.0], [64.7, 509.0], [64.8, 509.0], [64.9, 510.0], [65.0, 510.0], [65.1, 510.0], [65.2, 510.0], [65.3, 510.0], [65.4, 511.0], [65.5, 511.0], [65.6, 511.0], [65.7, 511.0], [65.8, 511.0], [65.9, 512.0], [66.0, 512.0], [66.1, 512.0], [66.2, 512.0], [66.3, 513.0], [66.4, 513.0], [66.5, 513.0], [66.6, 513.0], [66.7, 513.0], [66.8, 514.0], [66.9, 514.0], [67.0, 514.0], [67.1, 514.0], [67.2, 514.0], [67.3, 515.0], [67.4, 515.0], [67.5, 515.0], [67.6, 515.0], [67.7, 515.0], [67.8, 516.0], [67.9, 516.0], [68.0, 516.0], [68.1, 516.0], [68.2, 517.0], [68.3, 517.0], [68.4, 517.0], [68.5, 518.0], [68.6, 518.0], [68.7, 519.0], [68.8, 519.0], [68.9, 519.0], [69.0, 519.0], [69.1, 519.0], [69.2, 520.0], [69.3, 520.0], [69.4, 520.0], [69.5, 521.0], [69.6, 521.0], [69.7, 521.0], [69.8, 522.0], [69.9, 522.0], [70.0, 522.0], [70.1, 523.0], [70.2, 523.0], [70.3, 523.0], [70.4, 524.0], [70.5, 525.0], [70.6, 525.0], [70.7, 526.0], [70.8, 526.0], [70.9, 526.0], [71.0, 527.0], [71.1, 527.0], [71.2, 528.0], [71.3, 528.0], [71.4, 529.0], [71.5, 529.0], [71.6, 530.0], [71.7, 530.0], [71.8, 531.0], [71.9, 531.0], [72.0, 531.0], [72.1, 532.0], [72.2, 532.0], [72.3, 533.0], [72.4, 534.0], [72.5, 535.0], [72.6, 536.0], [72.7, 537.0], [72.8, 537.0], [72.9, 538.0], [73.0, 538.0], [73.1, 539.0], [73.2, 539.0], [73.3, 540.0], [73.4, 540.0], [73.5, 541.0], [73.6, 541.0], [73.7, 542.0], [73.8, 542.0], [73.9, 543.0], [74.0, 543.0], [74.1, 544.0], [74.2, 544.0], [74.3, 545.0], [74.4, 546.0], [74.5, 546.0], [74.6, 547.0], [74.7, 548.0], [74.8, 549.0], [74.9, 549.0], [75.0, 550.0], [75.1, 550.0], [75.2, 551.0], [75.3, 552.0], [75.4, 553.0], [75.5, 553.0], [75.6, 553.0], [75.7, 555.0], [75.8, 556.0], [75.9, 556.0], [76.0, 557.0], [76.1, 558.0], [76.2, 558.0], [76.3, 559.0], [76.4, 560.0], [76.5, 561.0], [76.6, 562.0], [76.7, 563.0], [76.8, 563.0], [76.9, 564.0], [77.0, 564.0], [77.1, 566.0], [77.2, 566.0], [77.3, 567.0], [77.4, 569.0], [77.5, 569.0], [77.6, 570.0], [77.7, 572.0], [77.8, 574.0], [77.9, 576.0], [78.0, 578.0], [78.1, 580.0], [78.2, 581.0], [78.3, 582.0], [78.4, 584.0], [78.5, 587.0], [78.6, 588.0], [78.7, 589.0], [78.8, 592.0], [78.9, 593.0], [79.0, 595.0], [79.1, 597.0], [79.2, 598.0], [79.3, 599.0], [79.4, 601.0], [79.5, 604.0], [79.6, 606.0], [79.7, 608.0], [79.8, 610.0], [79.9, 611.0], [80.0, 616.0], [80.1, 620.0], [80.2, 621.0], [80.3, 624.0], [80.4, 626.0], [80.5, 628.0], [80.6, 629.0], [80.7, 631.0], [80.8, 634.0], [80.9, 636.0], [81.0, 641.0], [81.1, 645.0], [81.2, 647.0], [81.3, 651.0], [81.4, 653.0], [81.5, 655.0], [81.6, 660.0], [81.7, 662.0], [81.8, 664.0], [81.9, 667.0], [82.0, 671.0], [82.1, 674.0], [82.2, 682.0], [82.3, 685.0], [82.4, 688.0], [82.5, 693.0], [82.6, 697.0], [82.7, 706.0], [82.8, 710.0], [82.9, 715.0], [83.0, 716.0], [83.1, 722.0], [83.2, 729.0], [83.3, 732.0], [83.4, 737.0], [83.5, 748.0], [83.6, 753.0], [83.7, 757.0], [83.8, 767.0], [83.9, 772.0], [84.0, 786.0], [84.1, 793.0], [84.2, 802.0], [84.3, 806.0], [84.4, 808.0], [84.5, 814.0], [84.6, 817.0], [84.7, 823.0], [84.8, 826.0], [84.9, 830.0], [85.0, 835.0], [85.1, 842.0], [85.2, 848.0], [85.3, 854.0], [85.4, 863.0], [85.5, 876.0], [85.6, 884.0], [85.7, 891.0], [85.8, 898.0], [85.9, 914.0], [86.0, 919.0], [86.1, 930.0], [86.2, 943.0], [86.3, 961.0], [86.4, 971.0], [86.5, 984.0], [86.6, 1003.0], [86.7, 1062.0], [86.8, 1091.0], [86.9, 1105.0], [87.0, 1123.0], [87.1, 1126.0], [87.2, 1131.0], [87.3, 1133.0], [87.4, 1135.0], [87.5, 1138.0], [87.6, 1139.0], [87.7, 1141.0], [87.8, 1144.0], [87.9, 1145.0], [88.0, 1146.0], [88.1, 1148.0], [88.2, 1151.0], [88.3, 1152.0], [88.4, 1155.0], [88.5, 1158.0], [88.6, 1159.0], [88.7, 1161.0], [88.8, 1164.0], [88.9, 1167.0], [89.0, 1170.0], [89.1, 1174.0], [89.2, 1179.0], [89.3, 1182.0], [89.4, 1186.0], [89.5, 1191.0], [89.6, 1197.0], [89.7, 1204.0], [89.8, 1206.0], [89.9, 1214.0], [90.0, 1217.0], [90.1, 1219.0], [90.2, 1222.0], [90.3, 1230.0], [90.4, 1233.0], [90.5, 1238.0], [90.6, 1241.0], [90.7, 1244.0], [90.8, 1248.0], [90.9, 1251.0], [91.0, 1253.0], [91.1, 1258.0], [91.2, 1263.0], [91.3, 1267.0], [91.4, 1271.0], [91.5, 1277.0], [91.6, 1293.0], [91.7, 1299.0], [91.8, 1316.0], [91.9, 1333.0], [92.0, 1336.0], [92.1, 1339.0], [92.2, 1343.0], [92.3, 1346.0], [92.4, 1352.0], [92.5, 1353.0], [92.6, 1357.0], [92.7, 1359.0], [92.8, 1361.0], [92.9, 1363.0], [93.0, 1366.0], [93.1, 1367.0], [93.2, 1368.0], [93.3, 1370.0], [93.4, 1372.0], [93.5, 1375.0], [93.6, 1379.0], [93.7, 1383.0], [93.8, 1386.0], [93.9, 1395.0], [94.0, 1412.0], [94.1, 1414.0], [94.2, 1425.0], [94.3, 1436.0], [94.4, 1448.0], [94.5, 1465.0], [94.6, 1485.0], [94.7, 1504.0], [94.8, 1519.0], [94.9, 1526.0], [95.0, 1548.0], [95.1, 1558.0], [95.2, 1572.0], [95.3, 1587.0], [95.4, 1606.0], [95.5, 1618.0], [95.6, 1652.0], [95.7, 1666.0], [95.8, 1704.0], [95.9, 1744.0], [96.0, 1762.0], [96.1, 1818.0], [96.2, 1846.0], [96.3, 1870.0], [96.4, 1891.0], [96.5, 1925.0], [96.6, 1953.0], [96.7, 1967.0], [96.8, 2001.0], [96.9, 2019.0], [97.0, 2037.0], [97.1, 2092.0], [97.2, 2122.0], [97.3, 2148.0], [97.4, 2177.0], [97.5, 2203.0], [97.6, 2273.0], [97.7, 2331.0], [97.8, 2363.0], [97.9, 2387.0], [98.0, 2448.0], [98.1, 2498.0], [98.2, 2569.0], [98.3, 2617.0], [98.4, 2743.0], [98.5, 2812.0], [98.6, 2874.0], [98.7, 3032.0], [98.8, 3102.0], [98.9, 3147.0], [99.0, 3289.0], [99.1, 3520.0], [99.2, 3659.0], [99.3, 4009.0], [99.4, 4492.0], [99.5, 4838.0], [99.6, 5164.0], [99.7, 5571.0], [99.8, 6043.0], [99.9, 6481.0], [100.0, 8732.0]], "isOverall": false, "label": "Random user", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 300.0, "maxY": 3670.0, "series": [{"data": [[600.0, 207.0], [700.0, 96.0], [800.0, 103.0], [900.0, 50.0], [1000.0, 15.0], [1100.0, 179.0], [1200.0, 127.0], [1300.0, 142.0], [1400.0, 45.0], [1500.0, 42.0], [1600.0, 28.0], [1700.0, 17.0], [1800.0, 23.0], [1900.0, 22.0], [2000.0, 21.0], [2100.0, 22.0], [2300.0, 19.0], [2200.0, 10.0], [2400.0, 11.0], [2500.0, 11.0], [2600.0, 6.0], [2700.0, 6.0], [2800.0, 10.0], [2900.0, 4.0], [3000.0, 6.0], [3100.0, 7.0], [3200.0, 7.0], [3300.0, 5.0], [3500.0, 5.0], [3600.0, 3.0], [3700.0, 2.0], [3800.0, 1.0], [3900.0, 2.0], [4000.0, 1.0], [4200.0, 3.0], [4100.0, 1.0], [4500.0, 3.0], [4400.0, 2.0], [4800.0, 3.0], [4900.0, 2.0], [5100.0, 3.0], [5000.0, 1.0], [5300.0, 4.0], [5500.0, 2.0], [5400.0, 1.0], [5700.0, 2.0], [5800.0, 1.0], [5900.0, 2.0], [6100.0, 1.0], [6000.0, 2.0], [6200.0, 2.0], [6300.0, 1.0], [6600.0, 1.0], [6400.0, 1.0], [6800.0, 1.0], [6900.0, 1.0], [6700.0, 1.0], [7300.0, 1.0], [8700.0, 1.0], [300.0, 1.0], [400.0, 3670.0], [500.0, 1314.0]], "isOverall": false, "label": "Random user", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8700.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3729.0, "series": [{"data": [[0.0, 3729.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2219.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 334.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 3.4936305732484074, "minX": 1.7183781E12, "maxY": 9.147859922178982, "series": [{"data": [[1.718379E12, 3.8626198083067083], [1.7183787E12, 4.685897435897438], [1.71837864E12, 3.71111111111111], [1.7183793E12, 9.147859922178982], [1.71837834E12, 4.357594936708863], [1.71837828E12, 3.7096774193548385], [1.71837894E12, 3.5477707006369443], [1.71837924E12, 4.367412140575082], [1.71837888E12, 3.4936305732484074], [1.71837858E12, 3.703821656050955], [1.71837852E12, 3.5910543130990416], [1.71837918E12, 4.10191082802548], [1.71837822E12, 3.6126984126984114], [1.71837816E12, 3.881789137380191], [1.71837882E12, 3.5828025477707], [1.71837912E12, 3.573248407643312], [1.71837876E12, 3.61514195583596], [1.71837846E12, 3.644444444444444], [1.7183784E12, 4.367088607594936], [1.7183781E12, 3.8135593220338984], [1.71837906E12, 3.6349206349206344]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7183793E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 470.0, "minX": 1.0, "maxY": 7304.0, "series": [{"data": [[32.0, 6590.75], [33.0, 5949.0], [2.0, 470.0], [35.0, 6813.0], [34.0, 6493.5], [36.0, 6215.5], [37.0, 7304.0], [38.0, 6393.0], [3.0, 505.82411575562674], [4.0, 665.65230024213], [5.0, 777.0014064697617], [6.0, 1031.4962962962964], [7.0, 1214.68085106383], [8.0, 1378.6875000000002], [9.0, 1501.3888888888887], [10.0, 1736.368421052632], [11.0, 1962.3333333333333], [12.0, 2163.3809523809527], [13.0, 2518.928571428571], [14.0, 2659.875], [15.0, 2477.333333333333], [16.0, 2763.5], [1.0, 2187.0], [17.0, 3040.166666666667], [18.0, 3158.666666666667], [19.0, 3397.0], [20.0, 4220.333333333333], [21.0, 3920.5], [22.0, 4193.5], [23.0, 4143.333333333333], [24.0, 4147.0], [25.0, 4728.75], [26.0, 5303.0], [27.0, 4959.666666666667], [28.0, 5381.333333333333], [29.0, 5467.5], [30.0, 5544.666666666667], [31.0, 5533.5]], "isOverall": false, "label": "Random user", "isController": false}, {"data": [[4.060958141015437, 681.8825401878098]], "isOverall": false, "label": "Random user-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 38.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 117.01666666666667, "minX": 1.7183781E12, "maxY": 10076.6, "series": [{"data": [[1.718379E12, 9941.483333333334], [1.7183787E12, 9906.166666666666], [1.71837864E12, 10012.133333333333], [1.7183793E12, 8171.516666666666], [1.71837834E12, 10040.566666666668], [1.71837828E12, 9852.05], [1.71837894E12, 9989.85], [1.71837924E12, 9950.583333333334], [1.71837888E12, 9983.716666666667], [1.71837858E12, 9983.166666666666], [1.71837852E12, 9947.133333333333], [1.71837918E12, 9988.266666666666], [1.71837822E12, 10010.216666666667], [1.71837816E12, 9951.333333333334], [1.71837882E12, 9978.583333333334], [1.71837912E12, 9980.8], [1.71837876E12, 10076.6], [1.71837846E12, 10009.966666666667], [1.7183784E12, 10033.0], [1.7183781E12, 1854.5], [1.71837906E12, 10017.8]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.718379E12, 620.7833333333333], [1.7183787E12, 618.8], [1.71837864E12, 624.75], [1.7183793E12, 509.71666666666664], [1.71837834E12, 626.7333333333333], [1.71837828E12, 614.8333333333334], [1.71837894E12, 622.7666666666667], [1.71837924E12, 620.7833333333333], [1.71837888E12, 622.7666666666667], [1.71837858E12, 622.7666666666667], [1.71837852E12, 620.7833333333333], [1.71837918E12, 622.7666666666667], [1.71837822E12, 624.75], [1.71837816E12, 620.7833333333333], [1.71837882E12, 622.7666666666667], [1.71837912E12, 622.7666666666667], [1.71837876E12, 628.7166666666667], [1.71837846E12, 624.75], [1.7183784E12, 626.7333333333333], [1.7183781E12, 117.01666666666667], [1.71837906E12, 624.75]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7183793E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 575.9490445859869, "minX": 1.7183781E12, "maxY": 1657.2607003891062, "series": [{"data": [[1.718379E12, 644.6293929712464], [1.7183787E12, 795.8557692307694], [1.71837864E12, 617.0571428571433], [1.7183793E12, 1657.2607003891062], [1.71837834E12, 735.6867088607595], [1.71837828E12, 618.4645161290317], [1.71837894E12, 586.1305732484075], [1.71837924E12, 742.6230031948885], [1.71837888E12, 575.9490445859869], [1.71837858E12, 618.3343949044585], [1.71837852E12, 584.8690095846644], [1.71837918E12, 688.7197452229298], [1.71837822E12, 598.4984126984127], [1.71837816E12, 643.111821086262], [1.71837882E12, 589.894904458598], [1.71837912E12, 589.4458598726114], [1.71837876E12, 594.9211356466878], [1.71837846E12, 600.2825396825397], [1.7183784E12, 745.541139240506], [1.7183781E12, 626.7118644067793], [1.71837906E12, 598.4412698412699]], "isOverall": false, "label": "Random user", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7183793E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 563.2204472843451, "minX": 1.7183781E12, "maxY": 1649.6692607003872, "series": [{"data": [[1.718379E12, 639.4952076677314], [1.7183787E12, 785.692307692307], [1.71837864E12, 596.6825396825402], [1.7183793E12, 1649.6692607003872], [1.71837834E12, 714.4113924050635], [1.71837828E12, 609.6419354838715], [1.71837894E12, 576.2038216560514], [1.71837924E12, 718.9392971246009], [1.71837888E12, 568.8471337579615], [1.71837858E12, 600.1942675159236], [1.71837852E12, 563.2204472843451], [1.71837918E12, 676.8980891719744], [1.71837822E12, 590.5714285714288], [1.71837816E12, 639.8402555910538], [1.71837882E12, 576.6050955414015], [1.71837912E12, 578.6687898089178], [1.71837876E12, 585.9400630914826], [1.71837846E12, 591.0730158730165], [1.7183784E12, 726.582278481013], [1.7183781E12, 612.9322033898306], [1.71837906E12, 586.2126984126984]], "isOverall": false, "label": "Random user", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7183793E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 138.40445859872605, "minX": 1.7183781E12, "maxY": 172.30508474576268, "series": [{"data": [[1.718379E12, 140.1884984025559], [1.7183787E12, 140.39423076923057], [1.71837864E12, 155.28571428571425], [1.7183793E12, 139.90272373540856], [1.71837834E12, 153.91772151898732], [1.71837828E12, 140.8483870967743], [1.71837894E12, 140.14649681528658], [1.71837924E12, 146.00958466453682], [1.71837888E12, 138.40445859872605], [1.71837858E12, 140.4872611464968], [1.71837852E12, 140.7188498402555], [1.71837918E12, 140.1751592356688], [1.71837822E12, 143.9523809523811], [1.71837816E12, 142.23003194888173], [1.71837882E12, 143.32802547770697], [1.71837912E12, 140.44267515923568], [1.71837876E12, 140.9652996845427], [1.71837846E12, 140.07301587301592], [1.7183784E12, 140.87025316455683], [1.7183781E12, 172.30508474576268], [1.71837906E12, 143.63809523809513]], "isOverall": false, "label": "Random user", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7183793E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 384.0, "minX": 1.7183781E12, "maxY": 8732.0, "series": [{"data": [[1.718379E12, 2860.0], [1.7183787E12, 6893.0], [1.71837864E12, 2618.0], [1.7183793E12, 8732.0], [1.71837834E12, 4293.0], [1.71837828E12, 3688.0], [1.71837894E12, 2119.0], [1.71837924E12, 4441.0], [1.71837888E12, 2031.0], [1.71837858E12, 3032.0], [1.71837852E12, 3081.0], [1.71837918E12, 4584.0], [1.71837822E12, 3257.0], [1.71837816E12, 2539.0], [1.71837882E12, 3147.0], [1.71837912E12, 3348.0], [1.71837876E12, 2375.0], [1.71837846E12, 3324.0], [1.7183784E12, 3275.0], [1.7183781E12, 1515.0], [1.71837906E12, 3124.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.718379E12, 1174.6000000000001], [1.7183787E12, 1594.1999999999994], [1.71837864E12, 1147.4], [1.7183793E12, 5151.200000000001], [1.71837834E12, 1370.5], [1.71837828E12, 1058.0000000000027], [1.71837894E12, 967.0], [1.71837924E12, 1447.2], [1.71837888E12, 800.0], [1.71837858E12, 1189.0], [1.71837852E12, 833.6000000000001], [1.71837918E12, 1326.0], [1.71837822E12, 936.2000000000013], [1.71837816E12, 1186.8000000000002], [1.71837882E12, 945.0], [1.71837912E12, 871.5], [1.71837876E12, 1121.1999999999998], [1.71837846E12, 1130.6000000000001], [1.7183784E12, 1383.4], [1.7183781E12, 1210.5], [1.71837906E12, 1131.4]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.718379E12, 2198.480000000004], [1.7183787E12, 3198.2000000000003], [1.71837864E12, 2492.7199999999993], [1.7183793E12, 7099.839999999996], [1.71837834E12, 3455.569999999994], [1.71837828E12, 2296.829999999998], [1.71837894E12, 1652.4000000000005], [1.71837924E12, 3490.740000000007], [1.71837888E12, 1636.0500000000038], [1.71837858E12, 2288.700000000007], [1.71837852E12, 2276.2400000000025], [1.71837918E12, 2594.7000000000044], [1.71837822E12, 2273.5999999999954], [1.71837816E12, 2408.880000000001], [1.71837882E12, 2225.0000000000173], [1.71837912E12, 1971.5500000000015], [1.71837876E12, 1930.6199999999994], [1.71837846E12, 2091.319999999996], [1.7183784E12, 3213.8099999999968], [1.7183781E12, 1515.0], [1.71837906E12, 2475.5999999999904]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.718379E12, 1399.4000000000005], [1.7183787E12, 2390.1499999999996], [1.71837864E12, 1363.0], [1.7183793E12, 5991.7], [1.71837834E12, 1734.1499999999996], [1.71837828E12, 1408.2999999999993], [1.71837894E12, 1361.25], [1.71837924E12, 2042.4], [1.71837888E12, 1243.75], [1.71837858E12, 1369.75], [1.71837852E12, 1183.1000000000008], [1.71837918E12, 1875.0], [1.71837822E12, 1262.5999999999995], [1.71837816E12, 1497.0000000000005], [1.71837882E12, 1265.0], [1.71837912E12, 1255.0], [1.71837876E12, 1344.7999999999997], [1.71837846E12, 1278.799999999999], [1.7183784E12, 2251.2999999999993], [1.7183781E12, 1333.05], [1.71837906E12, 1262.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.718379E12, 441.0], [1.7183787E12, 441.0], [1.71837864E12, 444.0], [1.7183793E12, 442.0], [1.71837834E12, 443.0], [1.71837828E12, 437.0], [1.71837894E12, 438.0], [1.71837924E12, 443.0], [1.71837888E12, 438.0], [1.71837858E12, 442.0], [1.71837852E12, 444.0], [1.71837918E12, 384.0], [1.71837822E12, 445.0], [1.71837816E12, 443.0], [1.71837882E12, 442.0], [1.71837912E12, 442.0], [1.71837876E12, 438.0], [1.71837846E12, 442.0], [1.7183784E12, 438.0], [1.7183781E12, 443.0], [1.71837906E12, 405.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.718379E12, 496.0], [1.7183787E12, 496.0], [1.71837864E12, 490.0], [1.7183793E12, 516.0], [1.71837834E12, 497.0], [1.71837828E12, 496.0], [1.71837894E12, 492.0], [1.71837924E12, 499.0], [1.71837888E12, 492.5], [1.71837858E12, 484.0], [1.71837852E12, 486.0], [1.71837918E12, 494.5], [1.71837822E12, 491.0], [1.71837816E12, 486.0], [1.71837882E12, 489.0], [1.71837912E12, 487.5], [1.71837876E12, 484.0], [1.71837846E12, 489.0], [1.7183784E12, 494.0], [1.7183781E12, 490.0], [1.71837906E12, 486.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7183793E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 483.0, "minX": 1.0, "maxY": 2479.0, "series": [{"data": [[8.0, 551.0], [2.0, 1083.0], [9.0, 1263.5], [10.0, 1678.5], [11.0, 2479.0], [3.0, 507.0], [12.0, 1975.0], [13.0, 1332.5], [14.0, 1323.5], [4.0, 483.0], [1.0, 1692.0], [5.0, 486.0], [6.0, 490.0], [7.0, 509.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[3.0, 487.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 14.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 477.0, "minX": 1.0, "maxY": 2479.0, "series": [{"data": [[8.0, 537.5], [2.0, 1082.0], [9.0, 1250.5], [10.0, 1678.0], [11.0, 2479.0], [3.0, 501.0], [12.0, 1973.5], [13.0, 1331.5], [14.0, 1323.5], [4.0, 482.0], [1.0, 1690.0], [5.0, 485.0], [6.0, 489.0], [7.0, 505.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[3.0, 477.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 14.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 1.0166666666666666, "minX": 1.7183781E12, "maxY": 5.25, "series": [{"data": [[1.718379E12, 5.25], [1.7183787E12, 5.233333333333333], [1.71837864E12, 5.233333333333333], [1.7183793E12, 4.216666666666667], [1.71837834E12, 5.233333333333333], [1.71837828E12, 5.233333333333333], [1.71837894E12, 5.233333333333333], [1.71837924E12, 5.233333333333333], [1.71837888E12, 5.233333333333333], [1.71837858E12, 5.25], [1.71837852E12, 5.233333333333333], [1.71837918E12, 5.233333333333333], [1.71837822E12, 5.233333333333333], [1.71837816E12, 5.25], [1.71837882E12, 5.233333333333333], [1.71837912E12, 5.233333333333333], [1.71837876E12, 5.233333333333333], [1.71837846E12, 5.233333333333333], [1.7183784E12, 5.233333333333333], [1.7183781E12, 1.0166666666666666], [1.71837906E12, 5.233333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7183793E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.7183781E12, "maxY": 5.283333333333333, "series": [{"data": [[1.718379E12, 5.216666666666667], [1.7183787E12, 5.2], [1.71837864E12, 5.25], [1.7183793E12, 4.283333333333333], [1.71837834E12, 5.266666666666667], [1.71837828E12, 5.166666666666667], [1.71837894E12, 5.233333333333333], [1.71837924E12, 5.216666666666667], [1.71837888E12, 5.233333333333333], [1.71837858E12, 5.233333333333333], [1.71837852E12, 5.216666666666667], [1.71837918E12, 5.233333333333333], [1.71837822E12, 5.25], [1.71837816E12, 5.216666666666667], [1.71837882E12, 5.233333333333333], [1.71837912E12, 5.233333333333333], [1.71837876E12, 5.283333333333333], [1.71837846E12, 5.25], [1.7183784E12, 5.266666666666667], [1.7183781E12, 0.9666666666666667], [1.71837906E12, 5.25]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.7183781E12, 0.016666666666666666]], "isOverall": false, "label": "429", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7183793E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.7183781E12, "maxY": 5.283333333333333, "series": [{"data": [[1.718379E12, 5.216666666666667], [1.7183787E12, 5.2], [1.71837864E12, 5.25], [1.7183793E12, 4.283333333333333], [1.71837834E12, 5.266666666666667], [1.71837828E12, 5.166666666666667], [1.71837894E12, 5.233333333333333], [1.71837924E12, 5.216666666666667], [1.71837888E12, 5.233333333333333], [1.71837858E12, 5.233333333333333], [1.71837852E12, 5.216666666666667], [1.71837918E12, 5.233333333333333], [1.71837822E12, 5.25], [1.71837816E12, 5.216666666666667], [1.71837882E12, 5.233333333333333], [1.71837912E12, 5.233333333333333], [1.71837876E12, 5.283333333333333], [1.71837846E12, 5.25], [1.7183784E12, 5.266666666666667], [1.7183781E12, 0.9666666666666667], [1.71837906E12, 5.25]], "isOverall": false, "label": "Random user-success", "isController": false}, {"data": [[1.7183781E12, 0.016666666666666666]], "isOverall": false, "label": "Random user-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7183793E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.7183781E12, "maxY": 5.283333333333333, "series": [{"data": [[1.718379E12, 5.216666666666667], [1.7183787E12, 5.2], [1.71837864E12, 5.25], [1.7183793E12, 4.283333333333333], [1.71837834E12, 5.266666666666667], [1.71837828E12, 5.166666666666667], [1.71837894E12, 5.233333333333333], [1.71837924E12, 5.216666666666667], [1.71837888E12, 5.233333333333333], [1.71837858E12, 5.233333333333333], [1.71837852E12, 5.216666666666667], [1.71837918E12, 5.233333333333333], [1.71837822E12, 5.25], [1.71837816E12, 5.216666666666667], [1.71837882E12, 5.233333333333333], [1.71837912E12, 5.233333333333333], [1.71837876E12, 5.283333333333333], [1.71837846E12, 5.25], [1.7183784E12, 5.266666666666667], [1.7183781E12, 0.9666666666666667], [1.71837906E12, 5.25]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.7183781E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7183793E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

