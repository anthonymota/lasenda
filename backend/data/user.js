const { v4: generateId } = require('uuid');
const { hash } = require('bcryptjs');

async function readData() {
    const data = await fs.readFile('events.json', 'utf8');
    return JSON.parse(data);
  }
  
  async function writeData(data) {
    await fs.writeFile('events.json', JSON.stringify(data));
  }
  
async function add(data) {
    const storedData=await readData();
    const userId=generateId();
    const hashedPw= await hash(data.password,12);
    if (!storedData.users) {
        storedData.users = [];
      }
      storedData.users.push({ ...data, password: hashedPw, id: userId });
      await writeData(storedData);
      return { id: userId, email: data.email };
}

async function get(email) {
    const storedData = await readData();
    if (!storedData.users || storedData.users.length === 0) {
      throw new NotFoundError('Could not find any users.');
    }
  
    const user = storedData.users.find((ev) => ev.email === email);
    if (!user) {
      throw new NotFoundError('Could not find user for email ' + email);
    }
  
    return user;
  }
  
  exports.add = add;
  exports.get = get;