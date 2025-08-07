document.getElementById("CalculateButton").onclick = function () {
    const p1 = parseFloat(document.getElementById("Percentage1").value) || 0;
    const p2 = parseFloat(document.getElementById("Percentage2").value) || 0;
    const p3 = parseFloat(document.getElementById("Percentage3").value) || 0;
    const p4 = parseFloat(document.getElementById("Percentage4").value) || 0;
    const p5 = parseFloat(document.getElementById("Percentage5").value) || 0;
    const p6 = parseFloat(document.getElementById("Percentage6").value) || 0;
    const p7 = parseFloat(document.getElementById("Percentage7").value) || 0;
    const p8 = parseFloat(document.getElementById("Percentage8").value) || 0;
    

    const w1 = parseFloat(document.getElementById("Weight1").value) || 0;
    const w2 = parseFloat(document.getElementById("Weight2").value) || 0;
    const w3 = parseFloat(document.getElementById("Weight3").value) || 0;
    const w4 = parseFloat(document.getElementById("Weight4").value) || 0;
    const w5 = parseFloat(document.getElementById("Weight5").value) || 0;
    const w6 = parseFloat(document.getElementById("Weight6").value) || 0;
    const w7 = parseFloat(document.getElementById("Weight7").value) || 0;
    const w8 = parseFloat(document.getElementById("Weight8").value) || 0;

    const totalWeight = w1 + w2 + w3;

    let average = 0;

    if (totalWeight > 0) {
        average = ((p1 * w1) + (p2 * w2) + (p3 * w3) + (p4 * w4) + (p5 * w5) + (p6 * w6) + (p7 * w7) + (p8 * w8)) / totalWeight;
    }
    

    // Round to 2 decimal places
    average = Math.round(average * 100) / 100;

    document.getElementById("Result").textContent = `You have an average of ${average}%.`;

    if (totalWeight < 0) {
        document.getElementById("Result").textContent = `Total weight must be a number greater than 0.`;
    }


};

document.getElementById("FinalCalculateButton").onclick = function () {
    const currentGrade = parseFloat(document.getElementById("CurrentGrade").value) || 0;
    const remainingWeight = parseFloat(document.getElementById("FinalGradeWeight").value) || 0;
    const targetFinalGrade = parseFloat(document.getElementById("WantedFinalGrade").value) || 0;

    let requiredGrade = 0

    requiredGrade = (targetFinalGrade - currentGrade * (1 - remainingWeight / 100)) / (remainingWeight / 100);

    requiredGrade = Math.round(requiredGrade * 100) / 100;

    if (requiredGrade < 0) {
        document.getElementById("Result").textContent = `You will get atleast ${targetFinalGrade}% even if you get 0% on the final.`;  
    }

    if (requiredGrade >= 0) {
        document.getElementById("Result").textContent = `You need a grade of ${requiredGrade}% to achieve a final mark of ${targetFinalGrade}%.`;
    }

    if (requiredGrade > 100) {
        document.getElementById("Result").textContent = `It is not possible to attain a grade of ${targetFinalGrade}% even with a final mark of 100% on the final.`;
    }
};