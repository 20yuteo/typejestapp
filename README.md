# Typescript × Jest × Docker の実行環境

1. 環境構築
```
$ docker-compose build
$ docker-compose up -d
```

2. typescript ファイルのコンパイル
```
$ docker-compose exec app tsc src/index.ts
```

3. javascript ファイルの実行
```
$ docker-compose exec app node src/index.js
```

4. jest 実行
```
$ docker-compose exec app npm test
```