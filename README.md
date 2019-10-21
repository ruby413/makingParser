# Parser 기능 구현
## 1. ArrayParser - 토큰분석
### - 실행
```
cd arrayParser
node main.js
```
```
[1,2,3,4,5] // 등 배열 형식 입력
```
### - 출력
```
Array(5) [1, 2, 3, 4, 5]
```
<br/><br/>

## 2. ArrayParser - 무한중첩
### - 실행
```
cd infinityArrayParser
node main.js
```
```
['1a3', [null, false, ['11', [112233], 112], 55, '99'], 33, true] 
```
### - 출력
```
Array(4) ["1a3", Array(5), 33, true]
```
### - 에러처리
```
['1a'3'] // SyntaxError: Unexpected number
```

```
[3d3] // SyntaxError: Invalid or unexpected token
```