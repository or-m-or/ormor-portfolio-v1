---
title: 🧤 RAG(검색증강생성)을 활용한 관광가이드 챗봇 서비스(ODEGO)를 소개합니다!
description: first post.
date: '2023-7-01'
categories:
  - Langchain
  - RAG
  - Chatbot
  - FastAPI
  - Finetuning
  - Llama-7B
  - Ngrok
published: true
---

<details>
  <summary><strong>시연 영상을 확인하려면 여기를 클릭해주세요!</strong></summary>
  <video width="426" height="240" controls>
    <source src="https://pub-3a25cadc597e4ebbb8166e0e8f8a385f.r2.dev/odego_video.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</details>

---

![최종 산출물](https://pub-3a25cadc597e4ebbb8166e0e8f8a385f.r2.dev/odego_view.png)
<br>

**대학 시절, 학부 4학년 1학기 때 진행했던 ODEGO 프로젝트에 대해 소개하려 합니다.** <br>
**ODEGO 프로젝트는 ChatGPT가 공개된지 얼마 되지 않았던 시기에 진행되었던 프로젝트로,**<br>
**이 프로젝트는 생성형 AI의 할루시네이션 문제를 극복하고, <span style="color:#bab029">‘부산 여행’ 이라는 특정 도메인 지식에 기반한 챗봇</span> 구축을 목표로 진행되었습니다.** <br><br>

**이 글에서는 프로젝트 개요, 저의 기여, 제가 맡은 역할에 따른 문제 정의 및 해결 과정, 그리고 최종 성과와 결과에 대해서 정리하였습니다.**
<br><br>

## 프로젝트 개요
---

**주제 : RAG(검색증강생성)을 활용한 관광가이드 챗봇 서비스 개발** <br>
**개발 기간 : 2023.03.02 ~ 2023.06.09** <br>
**사용 기술 : Langchain, Llama-7B, FastAPI, React-Native, Ngrok** <br>
**담당 업무 : FastAPI를 기반으로 한 벡엔드 서버 구축, LLM 배포를 위한 서버 아키텍처 설계** <br>

<br><br>

## 기여한 점
---

- **당시 생소했던 Langchain 라이브러리 사용을 제안했고, <span style="color:#bab029">기존 파인튜닝 버전 대비 약 60%의 성능 개선과 비용 절감</span>효과를 달성했습니다.**
- **FastAPI 기반의 백엔드 개발을 담당하고, 전이 학습된 LLM을 웹 애플리케이션에서 임시로 서빙하기 위한 서버 아키텍처 설계를 맡았습니다.**

<br><br>

## 문제 정의 1 
: 파인튜닝만으로 LLM의 환각 현상이 잘 해소되지 않음.

---

**프로젝트 초반에 저희 팀은 가용 가능한 하드웨어 자원을 고려하여 트랜스포머 기반 모델인 Llama-7B 모델을 대상으로 네이버지도에서 크롤링한 관광 데이터셋으로 파인튜닝하였습니다.**

![파인 튜닝 결과](https://pub-3a25cadc597e4ebbb8166e0e8f8a385f.r2.dev/odego-finetuning.png)

**하지만, 테스트 결과 투자하는 자원 대비 한국어 생성 결과가 기대 이하로 나타났고, 환각현상도 해결되지 않았습니다.**

![파인 튜닝 평가 결과](https://pub-3a25cadc597e4ebbb8166e0e8f8a385f.r2.dev/odego_finetuning_eval.png)

<br><br>

## 문제 해결 1 
: 논문과 기사를 통해 찾은 새로운 기술을 바로 적용해보며 문제를 해결함. 

---

**가용 가능한 자원에 한계가 있었기에, <span style="color:#bab029">LLM 자체를 학습시켜 환각을 해결하는 방법</span>은 적절하지 않다고 생각하였습니다.** <br>

**이에 <span style="color:#bab029">NLP 관련 논문과 자료를 탐독</span>하면서 Langchain과 프롬프트 엔지니어링 같은 새로운 기술들을 발견할 수 있었습니다.**<br>

**당시 레퍼런스가 거의 없었기에 팀원들을 설득하기 어려웠으나, 공식문서를 참고해가며 <span style="color:#bab029">직접 데모 버전을 구축하여 성공적으로 팀원을 설득</span>할 수 있었습니다.**
<br><br>


## 문제 정의 2
: 자원이 부족한 상황에서, 파인튜닝된 LLM을 서빙해야함.

---

**Langchain을 도입하기 전, 팀원들이 파인 튜닝을 진행하는 동안 저는 <span style="color:#bab029">전이 학습된 LLM을 웹 애플리케이션에서 임시로 서빙</span>하기 위한 서버 아키텍처 설계를 담당했습니다.** <br>

**이전에 언어 모델을 파인 튜닝할 때 사용한 GPU 대여 비용으로 인해, 저희 팀은 배포를 위한 금전적인 여유가 부족한 상황이었습니다. 이러한 제약 속에서 파인 튜닝한 언어 모델을 배포하고 서빙해야 했습니다.**



<br><br>

## 문제 해결 2 
: 주어진 상황과 조건을 면밀히 파악하고, 자료 조사를 통해 찾은 기술을 도입하여 문제를 해결함.

---

**우선, 배포의 목적을 명확히 파악하는 것이 중요하다고 생각했습니다. 배포의 목적이 서비스 운영이 아닌, 발표 시 임시 사용을 위한 것임을 우선적으로 판단하였습니다**

**이에 따라, 저는 관련 자료를 조사한 끝에 Ngrok을 발견했고, 이를 활용해 Colab에서 모델을 추론하고 터널링하는 방식으로 서버 아키텍처를 설계하였습니다.**

![서버 아키텍처](https://pub-3a25cadc597e4ebbb8166e0e8f8a385f.r2.dev/odego_deploy.png)


<br><br>

## 결과 및 성과
---

- **결과적으로, 테스트용으로 지정한 QA 문항을 통해 평가한 결과, 제가 제안한 Langchain을 사용한 버전이 초기 파인튜닝 버전에 비해 <span style="color:#bab029">약 60%의 성능 개선</span>을 이루었으며, <span style="color:#bab029">비용 또한 대폭 절감</span>되었습니다.**
- **해당 프로젝트로 인해 교수님께 추천을 받아 레인보우브레인의 RAG 애플리케이션 <span style="color:#bab029">QA 테스트 아르바이트 기회</span>를 얻는 성과가 있었습니다.**
- **마찬가지로 교수님의 추천으로 레인보우브레인 개발본부 솔루션개발팀의 <span style="color:#bab029">인턴쉽을 제안</span>받는 성과가 있었습니다.**