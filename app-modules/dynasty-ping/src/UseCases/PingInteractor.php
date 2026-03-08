<?php

declare(strict_types=1);

namespace Dynasty\Ping\UseCases;

use FFI;

final class PingInteractor implements PingUseCase
{
    public function handle(): string
    {
        // 共有ライブラリのパスを指定
        $extension = PHP_OS_FAMILY === 'Windows' ? 'dll' : (PHP_OS_FAMILY === 'Darwin' ? 'dylib' : 'so');
        $libPath = base_path("resources/rust/target/release/libdynasty_rust_ping.{$extension}");

        // C言語の関数プロトタイプ宣言
        $ffi = FFI::cdef('
            char* ping();
            void free_string(char* s);
        ', $libPath);

        // Rustの関数を呼び出し
        $ptr = $ffi->ping();

        // Cの文字列をPHPのstringに変換
        $result = FFI::string($ptr);

        // Rust側で確保したメモリを解放
        $ffi->free_string($ptr);

        return $result;
    }
}
