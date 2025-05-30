#!/usr/bin/env node

const { spawn } = require('child_process');
const args = process.argv.slice(2);

if (args.length === 0) {
    console.log(`
🚀 Firebase 호스팅 배포 도구

사용법:
  node deploy.js [환경]

환경 옵션:
  live    - 메인 사이트 배포 (https://wiseup-9542e.web.app)
  test    - 테스트 환경 배포 (30일 유효)

예시:
  node deploy.js live     # 메인 사이트에 배포
  node deploy.js test     # 테스트 채널에 배포
    `);
    process.exit(0);
}

const environment = args[0];
let command;

switch (environment) {
    case 'live':
        command = ['firebase', 'deploy', '--only', 'hosting'];
        console.log('🔴 메인 사이트에 배포 중...');
        break;
    case 'test':
        command = ['firebase', 'hosting:channel:deploy', 'test', '--expires', '30d'];
        console.log('🟡 테스트 채널에 배포 중...');
        break;
    default:
        console.error('❌ 잘못된 환경입니다. live, test 중 하나를 선택하세요.');
        process.exit(1);
}

const deployProcess = spawn(command[0], command.slice(1), {
    stdio: 'inherit',
    shell: true
});

deployProcess.on('close', (code) => {
    if (code === 0) {
        console.log(`\n✅ ${environment} 환경에 성공적으로 배포되었습니다!`);
        
        // 배포된 URL 표시
        switch (environment) {
            case 'live':
                console.log('🌐 URL: https://wiseup-9542e.web.app');
                break;
            case 'test':
                console.log('🌐 테스트 URL: https://wiseup-9542e--test-4stfydra.web.app');
                break;
        }
    } else {
        console.error(`❌ 배포 실패 (종료 코드: ${code})`);
        process.exit(code);
    }
});

deployProcess.on('error', (error) => {
    console.error('❌ 배포 중 오류 발생:', error.message);
    process.exit(1);
}); 