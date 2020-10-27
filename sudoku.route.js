const express = require('express')
const router = express.Router()
const ROUTES = require('../../constants/route.constant')
const apiHelper = require('../../helpers/api.helper')
const GLOBAL = require('../../constants/global.constant')
const ERROR_LITERAL= require('../../constants/error-literal.constant')

router.post(`${ROUTES.CREATE_SUDOKU.URL}`, async(req,res,next)=>{
    try{
const {body} = req
const arr = [...body.data]
const col1 = arr.slice(0,9)
const col2 = arr.slice(9,18)
const col3 = arr.slice(18,27)
const col4 = arr.slice(27,36)
const col5 = arr.slice(36,45)
const col6 = arr.slice(45,54)
const col7 = arr.slice(54,63)
const col8 = arr.slice(63,72)
const col9 = arr.slice(72,81)

const boardArray = [col1,col2,col3,col4, col5, col6, col7, col8, col9]

solve(boardArray)

const finalResult = await flatten(boardArray)

if(finalResult){
    return apiHelper.success(res,{finalResult}, ERROR_LITERAL.CREATE_SUDOKU_SUCCESS,GLOBAL.STATUS_CODE.SUCCESS)
}
    }catch(err){
        return apiHelper.failure(res, [err], ERROR_LITERAL.COMMON_MSG.CATCH_ERR, GLOBAL.STATUS_CODE.BAD_REQUEST)
    }
})
function possible(board, row, col, k) {
    for(let i = 0; i<9;i++){
        const m =3* Math.floor(row/3)+ Math.floor(i/3)
        const n = 3*Math.floor(col/3)+i%3
        if(board[row][i]==k||board[i][col]==k|| board[m][n]==k){
            return false
        }
    }
    return true;
  }
  function flatten  (arr)
{
    return arr.reduce(function(flat, toFlatten){
        return flat.concat(Array.isArray(toFlatten)?flatten(toFlatten):toFlatten)
    },[])
}

function solve(data) {
    for (let y = 0; y < 9; y++) {
      for (let x = 0; x < 9; x++) {
        if (data[y][x] == null) {
          for (let n = 1; n <= 9; n++) {
            if (possible(data, y, x, n)) {
              data[y][x] = n;
              if (solve(data)) {return true;}
              else{
                data[y][x] = null;
              }
            }
          }
          return false;
        }
      }
    }
    
    return true;
  }


module.exports = router