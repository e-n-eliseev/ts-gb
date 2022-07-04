const getArgs = (): string[] | number[] | undefined => {
    const args = process.argv.slice(2);

    if (args.length) {
        return args;
    }

    return undefined;
}

const getStringOfNumbers = (): void => {

    const arr = getArgs();

    if (!arr) {
        console.log("Пожалуйста, введите данные")
        return;
    }
    if (arr.length !== 2) {
        console.log("Задано некорректное количество аргументов");
        return;
    }
    let [min, max] = arr;
    min = Math.ceil(+min);
    max = Math.floor(+max);
    if (Number.isNaN(min) || Number.isNaN(max)) {
        console.log("Введены некорректные данные!");
        return;
    }
    if (min > max) {
        console.log("Введен некорректный диапазон чисел!");
        return;
    }

    if (min < 2) min = 2;

    const seive: boolean[] = [];
    let result: number[] = [];

    for (let i = 2; i <= max; i++) {
        if (!seive[i]) {
            if (i >= min) {
                result.push(i);
            }
            for (let j = i * i; j <= max; j += i) {
                seive[j] = true
            }
        }
    }
    if (result.length === 0) {
        console.log("В данном диапазоне нет простых чисел!");
        return;
    }
    console.log(result.join(","));
}

getStringOfNumbers();