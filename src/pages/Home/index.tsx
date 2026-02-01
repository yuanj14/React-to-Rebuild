import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { getLocale, setLocale, useIntl, useModel } from '@umijs/max';
import { Button } from 'antd';
import styles from './index.less';

const HomePage: React.FC = () => {
  const { name } = useModel('global');
  const intl = useIntl();

  const switchLocale = () => {
    const currentLocale = getLocale();
    if (currentLocale === 'zh-CN') {
      setLocale('en-US', false);
    } else {
      setLocale('zh-CN', false);
    }
  };

  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <h1>{intl.formatMessage({ id: 'page.home.welcome' })}</h1>
        <Button type="primary" onClick={switchLocale}>
          {intl.formatMessage({ id: 'page.home.switchLang' })}
        </Button>
        <Guide name={trim(name)} />
      </div>
    </PageContainer>
  );
};

export default HomePage;
