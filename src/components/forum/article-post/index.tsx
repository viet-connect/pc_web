import styled from 'styled-components';
import { useTranslation } from 'next-i18next';
import { useMemo } from 'react';
import CommonInput from '../../common/Input';
import Editor from '../../common/Editor';
import KakaoChatButton from '../../common/KakaoButton';

export default function ArticlePost(props) {
  const { t } = useTranslation();

  const { article, readOnly, onChange, children } = props;
  const { title, contents } = article;

  const titleAttrs = {
    className: `article-post__title${readOnly ? '--readonly' : ''}`,
    type: 'textarea',
    value: title,
    placeholder: t('article:title'),
    wrapperStyle: { fontSize: '24px' },
    maxLength: 100,
    rows: 1,
    wrap: 'on',
    readOnly,
  };
  const editorAttrs = useMemo(
    () => ({
      value: contents,
      placeholder: t('article:editor'),
      readOnly,
    }),
    [contents, readOnly, t],
  );
  const onClick = () => {};

  /* 임시방편 ID가 anchor일 때는 버튼생성 */
  return (
    <Wrapper className="article-post">
      <HeadWrapper>
        <CommonInput {...titleAttrs} onChange={(v) => onChange({ title: v })} />
        {children}
      </HeadWrapper>
      <Editor {...editorAttrs} onChange={(v) => onChange({ contents: v })} />
      {editorAttrs.readOnly && props.article.id === 'anchor' && <KakaoChatButton size="large" />}
    </Wrapper>
  );
}

const HeadWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  position: relative;

  .article-post__title {
    margin-top: 70px;
    textarea {
      padding: 8px 0px 14px 0px !important;
    }
    &--readonly {
      padding: 8px 0px;

      input,
      textarea {
        border: none !important;
      }
    }

    @media (min-width: 410px) {
      margin-top: 48px;
    }
  }

  .common-editor {
    border: none !important;
    &__toolbar {
      position: absolute;
      top: 0px;
      width: 100%;
      border: 1px solid #d9d9d9;
      border-radius: 6px;
      box-sizing: border-box;
    }
  }
`;
