class CalcController {
    handleRectanglePerimeterAndAcreage(req, res, next) {
        const { shortEdge, longEdge } = req.body;
        const perimeter = (parseFloat(shortEdge) + parseFloat(longEdge)) * 2;
        const acreage = parseFloat(longEdge) * parseFloat(shortEdge);
        return res.json({perimeter: perimeter, acreage: acreage});
    }

    handleVolumeOfCube(req, res, next) {
        const { edge } = req.body;
        const volume = Math.pow(parseFloat(edge), 3);
        return res.json({ volume: volume });
    }

    handleQuadratic(req, res, next) {
        const { a, b, c } = req.body;
        const valueA = parseFloat(a);
        const valueB = parseFloat(b);
        const valueC = parseFloat(c);
        const delta = Math.pow(valueB, 2) - 4 * valueA * valueC;
        if (valueA === 0) {
            if (valueB === 0) {
                return res.json({ value: 'Phương trình có vô số nghiệm' });
            } else {
                const value1 = -valueC / valueB;
                return res.json({ value: `Phương trình có một nghiệm: ${value1}` });
            }
        } else {
            if (delta < 0) {
                return res.json({ value: 'Phương trình vô nghiệm' });
            } else {
                if (delta === 0) {
                    const value1 = -valueB / (2*valueA);
                    return res.json({ value: `Phương trình có một nghiệm kép: ${value1}` });
                } else {
                    const value1 = ((-valueB + Math.sqrt(delta)) / (2 * valueA));
                    const value2 = ((-valueB - Math.sqrt(delta)) / (2 * valueA));
                    return res.json({ value: `Phương trình có hai nghiệm phân biệt: ${value1} và ${value2}` });

                }
            }
        }
    }

    handleExchangeFahrenheitToCelsiusAndReverse(req, res, next) {
        const { value, type } = req.body;
        if (type === 'F to C') {
            const result = 5 / 9 * (parseFloat(value) - 32);
            return res.json({ result : result.toFixed(2) });
        } else {
            const result = 9/5 * parseFloat(value) + 32
            return res.json({ result: result.toFixed(2) });
        }
    }
}

export default new CalcController;