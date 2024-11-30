import Button from '../components/Button';
import { GoBell, GoCloudDownload, GoAlert } from 'react-icons/go';

function ButtonPage() {
  return (
    <div>
      <div>
        <Button
          primary
          outline
          rounded
          className="mb-4"
          onClick={() => console.log('clicked')}
        >
          Sush <GoBell />
        </Button>
      </div>
      <div>
        <Button secondary>Surya</Button>
      </div>
      <div>
        <Button success primary rounded>
          {' '}
          <GoCloudDownload />
          Sarath
        </Button>
      </div>
      <div>
        <Button warning>
          Jaswanth <GoAlert />
        </Button>
      </div>
      <div>
        <Button danger outline>
          Saichand
        </Button>
      </div>
      <div>
        <Button>Chenna</Button>
      </div>
    </div>
  );
}

export default ButtonPage;
