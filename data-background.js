/**
 * COM1008 Assignement 2
 * Author: Craig de Gouveia (170164160)
 * Modified: 06/12/2017
 */

let background = [
    ["33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333"],
    ["33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333"],
    ["33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333"],
    ["33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333"],
    ["33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333"],
    ["33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333"],
    ["33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333"],
    ["33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333"],
    ["33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333"],
    ["33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333"],
    ["33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333"],
    ["33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333"],
    ["33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333"],
    ["33333333333333333333333333333333333333333333333333333300000000000000000000333333333333333333333333333333333333333333333333333333"],
    ["33333333333333333333333333333333333333333333333333333300000000000000000000333333333333333333333333333333333333333333333333333333"],
    ["33333333333333333333333333333333333333333333333333333344444444444444444444333333333333333333333333333333333333333333333333333333"],
    ["33333333333333333333333333333333333333333333330000000044444444444444444444000000003333333333333333333333333333333333333333333333"],
    ["33333333333333333333333333333333333333333333330000000444444444444444444444400000003333333333333333333333333333333333333333333333"],
    ["33333333333333333333333333333333333333333000004444444444444444444444444444444444440000033333333333333333333333333333333333333333"],
    ["33333333333333333333333333333333333333333000004444444444444444444444444444444444440000033333333333333333333333333333333333333333"],
    ["33333333333333333333333333333333333333333444444444444444444444444444444444444444444444433333333333333333333333333333333333333333"],
    ["33333333333333333333333333333333333333300444444444444444444444444444444444444444444444400333333333333333333333333333333333333333"],
    ["33333333333333333333333333333333333333304444444444444444444444444444444444444444444444440333333333333333333333333333333333333333"],
    ["33333333333333333333333333333333333300444444444444444444444444444444444444444444444444444400333333333333333333333333333333333333"],
    ["33333333333333333333333333333333333300444444444444444444444444444444444444444444444444444400333333333333333333333333333333333333"],
    ["33333333333333333333333333333333333334444444444444444444444444444444444444444444444444444443333333333333333333333333333333333333"],
    ["33333333333333333333333333333333300044444444444444444444444444444444444444444444444444444444000333333333333333333333333333333333"],
    ["33333333333333333333333333333333300444444444444444444444444444444444444444444444444444444444400333333333333333333333333333333333"],
    ["33333333333333333333333333333330044444444444444444444444444444444444444444444444444444444444444003333333333333333333333333333333"],
    ["33333333333333333333333333333330044444444444444444444444444444444444444444444444444444444444444003333333333333333333333333333333"],
    ["33333333333333333333333333333334444444444444444444444444444444444444444444444444444444444444444443333333333333333333333333333333"],
    ["33333333333333333333333333330004444444444444444444444444444444444444444444444444444444444444444440003333333333333333333333333333"],
    ["33333333333333333333333333330044444444444444444444444444444444444444444444444444444444444444444444003333333333333333333333333333"],
    ["33333333333333333333333333330044444444444444444444444444444444444444444444444444444444444444444444003333333333333333333333333333"],
    ["33333333333333333333333333330044444444444444444444444444444444444444444444444444444444444444444444003333333333333333333333333333"],
    ["33333333333333333333333333330044444444444444444444444444444444444444444444444444444444444444444444003333333333333333333333333333"],
    ["33333333333333333333333333004444444444444444444444444444444444444444444444444444444444444444444444440033333333333333333333333333"],
    ["33333333333333333333333333004444444444444444444444444444444444444444444444444444444444444444444444440033333333333333333333333333"],
    ["33333333333333333333333333004444444444444444444444444444444444444444444444444444444444444444444444440033333333333333333333333333"],
    ["33333333333333333333333333004444444444444444444444444444444444444444444444444444444444444444444444440033333333333333333333333333"],
    ["33333333333333333333333333004444444444444444444444444444444444444444444444444444444444444444444444440033333333333333333333333333"],
    ["33333333333333333333333333004444444444444444444444444444444444444444444444444444444444444444444444440033333333333333333333333333"],
    ["33333333333333333333333333004444444444444444444444444444444444444444444444444444444444444444444444440033333333333333333333333333"],
    ["33333333333333333333333334444444444444444444444444444444444444444444444444444444444444444444444444444443333333333333333333333333"],
    ["33333333333333333333333004444444444444444444444444444444444444444444444444444444444444444444444444444440033333333333333333333333"],
    ["33333333333333333333333004444444444444444444444444444444444444444444444444444444444444444444444444444440033333333333333333333333"],
    ["33333333333333333333333004444444444444444444444444444444444444444444444444444444444444444444444444444440033333333333333333333333"],
    ["33333333333333333333333004444444444444444444444444444444444444444444444444444444444444444444444444444440033333333333333333333333"],
    ["33333333333333333333333004444444444444444444444444444444444444444444444444444444444444444444444444444440033333333333333333333333"],
    ["33333333333333333333333004444444444444444444444444444444444444444444444444444444444444444444444444444440033333333333333333333333"],
    ["33333333333333333333333004444444444444444444444444444444444444444444444444444444444444444444444444444440033333333333333333333333"],
    ["33333333333333333333333004444444444444444444444444444444444444444444444444444444444444444444444444444440033333333333333333333333"],
    ["33333333333333333333333004444444444444444444444444444444444444444444444444444444444444444444444444444440033333333333333333333333"],
    ["33333333333333333333330044444444444444444444444444444444444444444444444444444444444444444444444444444444003333333333333333333333"],
    ["33333333333333333333300444444444444444444444444444444444444444444444444444444444444444444444444444444444400333333333333333333333"],
    ["33333333333333333333300444444444444444444444444444444444444444444444444444444444444444444444444444444444400333333333333333333333"],
    ["33333333333333333333300444444444444444444444444444444444444444444444444444444444444444444444444444444444400333333333333333333333"],
    ["33333333333333333333300444444444444444444444444444444444444444444444444444444444444444444444444444444444400333333333333333333333"],
    ["33333333333333333333300444444444444444444444444444444444444444444444444444444444444444444444444444444444400333333333333333333333"],
    ["33333333333333333333300444444444444444444444444444444444444444444444444444444444444444444444444444444444400333333333333333333333"],
    ["33333333333333333333300444444444444444444444444444444444444444444444444444444444444444444444444444444444400333333333333333333333"],
    ["33333333333333333333300444444444444444444444444444444444444444444444444444444444444444444444444444444444400333333333333333333333"],
    ["33333333333333333333300444444444444444444444444444444444444444444444444444444444444444444444444444444444400333333333333333333333"],
    ["33333333333333333333300444444444444444444444444444444444444444444444444444444444444444444444444444444444400333333333333333333333"],
    ["33333333333333333333300444444444444444444444444444444444444444444444444444444444444444444444444444444444400333333333333333333333"],
    ["33333333333333333333300444444444444444444444444444444444444444444444444444444444444444444444444444444444400333333333333333333333"],
    ["33333333333333333333300444444444444444444444444444444444444444444444444444444444444444444444444444444444400333333333333333333333"],
    ["33333333333333333333300444444444444444444444444444444444444444444444444444444444444444444444444444444444400333333333333333333333"],
    ["33333333333333333333300444444444444444444444444444444444444444444444444444444444444444444444444444444444400333333333333333333333"],
    ["33333333333333333333300444444444444444444444444444444444444444444444444444444444444444444444444444444444400333333333333333333333"],
    ["33333333333333333333300444444444444444444444444444444444444444444444444444444444444444444444444444444444400333333333333333333333"],
    ["33333333333333333333300444444444444444444444444444444444444444444444444444444444444444444444444444444444400333333333333333333333"],
    ["33333333333333333333300444444444444444444444444444444444444444444444444444444444444444444444444444444444400333333333333333333333"],
    ["33333333333333333333300444444444444444444444444444444444444444444444444444444444444444444444444444444444400333333333333333333333"],
    ["33333333333333333333300444444444444444444444444444444444444444444444444444444444444444444444444444444444400333333333333333333333"],
    ["33333333333333333333300444444444444444444444444444444444444444444444444444444444444444444444444444444444400333333333333333333333"],
    ["33333333333333333333300444444444444444444444444444444444444444444444444444444444444444444444444444444444400333333333333333333333"],
    ["33333333333333333333300444444444444444444444444444444444444444444444444444444444444444444444444444444444400333333333333333333333"],
    ["33333333333333333333300444444444444444444444444444444444444444444444444444444444444444444444444444444444400333333333333333333333"],
    ["33333333333333333333300444444444444444444444444444444444444444444444444444444444444444444444444444444444400333333333333333333333"],
    ["33333333333333333333300444444444444444444444444444444444444444444444444444444444444444444444444444444444400333333333333333333333"],
    ["33333333333333333333300444444444444444444444444444444444444444444444444444444444444444444444444444444444400333333333333333333333"],
    ["33333333333333333333300444444444444444444444444444444444444444444444444444444444444444444444444444444444400333333333333333333333"],
    ["33333333333333333333300444444444444444444444444444444444444444444444444444444444444444444444444444444444400333333333333333333333"],
    ["33333333333333333333300444444444444444444444444444444444444444444444444444444444444444444444444444444444400333333333333333333333"],
    ["33333333333333333333300444444444444444444444444444444444444444444444444444444444444444444444444444444444400333333333333333333333"],
    ["33333333333333333333300444444444444444444444444444444444444444444444444444444444444444444444444444444444400333333333333333333333"],
    ["33333333333333333333333004444444444444444444444444444444444444444444444444444444444444444444444444444440033333333333333333333333"],
    ["33333333333333333333333004444444444444444444444444444444444444444444444444444444444444444444444444444440033333333333333333333333"],
    ["33333333333333333333333004444444444444444444444444444444444444444444444444444444444444444444444444444440033333333333333333333333"],
    ["33333333333333333333333004444444444444444444444444444444444444444444444444444444444444444444444444444440033333333333333333333333"],
    ["33333333333333333333333004444444444444444444444444444444444444444444444444444444444444444444444444444440033333333333333333333333"],
    ["33333333333333333333333004444444444444444444444444444444444444444444444444444444444444444444444444444440033333333333333333333333"],
    ["33333333333333333333333004444444444444444444444444444444444444444444444444444444444444444444444444444440033333333333333333333333"],
    ["33333333333333333333333004444444444444444444444444444444444444444444444444444444444444444444444444444440033333333333333333333333"],
    ["33333333333333333333333333004444444444444444444444444444444444444444444444444444444444444444444444440033333333333333333333333333"],
    ["33333333333333333333333333004444444444444444444444444444444444444444444444444444444444444444444444440033333333333333333333333333"],
    ["33333333333333333333333333004444444444444444444444444444444444444444444444444444444444444444444444440033333333333333333333333333"],
    ["33333333333333333333333333004444444444444444444444444444444444444444444444444444444444444444444444440033333333333333333333333333"],
    ["33333333333333333333333333004444444444444444444444444444444444444444444444444444444444444444444444440033333333333333333333333333"],
    ["33333333333333333333333333330044444444444444444444444444444444444444444444444444444444444444444444003333333333333333333333333333"],
    ["33333333333333333333333333330004444444444444444444444444444444444444444444444444444444444444444440003333333333333333333333333333"],
    ["33333333333333333333333333333334444444444444444444444444444444444444444444444444444444444444444443333333333333333333333333333333"],
    ["33333333333333333333333333333330044444444444444444444444444444444444444444444444444444444444444003333333333333333333333333333333"],
    ["33333333333333333333333333333330044444444444444444444444444444444444444444444444444444444444444003333333333333333333333333333333"],
    ["33333333333333333333333333333333300444444444444444444444444444444444444444444444444444444444400333333333333333333333333333333333"],
    ["33333333333333333333333333333333300044444444444444444444444444444444444444444444444444444444000333333333333333333333333333333333"],
    ["33333333333333333333333333333333333344444444444444444444444444444444444444444444444444444444333333333333333333333333333333333333"],
    ["33333333333333333333333333333333333300000444444444444444444444444444444444444444444444400000333333333333333333333333333333333333"],
    ["33333333333333333333333333333333333300000444444444444444444444444444444444444444444444400000333333333333333333333333333333333333"],
    ["33333333333333333333333333333333333333333000000044444444444444444444444444444444000000033333333333333333333333333333333333333333"],
    ["33333333333333333333333333333333333333333000000044444444444444444444444444444444000000033333333333333333333333333333333333333333"],
    ["33333333333333333333333333333333333333333333333344444444444444444444444444444444333333333333333333333333333333333333333333333333"],
    ["33333333333333333333333333333333333333333333333330000000000000000000000000000003333333333333333333333333333333333333333333333333"],
    ["33333333333333333333333333333333333333333333333330000000000000000000000000000003333333333333333333333333333333333333333333333333"],
    ["33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333"],
    ["33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333"],
    ["33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333"],
    ["33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333"],
    ["33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333"],
    ["33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333"],
    ["33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333"],
    ["33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333"],
    ["33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333"],
    ["33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333"],
    ["33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333"],
    ["33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333"],
    ["33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333"]
]