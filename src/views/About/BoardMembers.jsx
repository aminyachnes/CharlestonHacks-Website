import doug_hamilton from '../../assets/images/doug_hamilton.jpg'
import dave_ingram from '../../assets/images/dave_ingram.jpg'
import will_horn from '../../assets/images/will_horn.jpg'
import brian_gillespie from '../../assets/images/brian_gillespie.jpg'
import gavin_coyle from '../../assets/images/gavin_coyle.jpg'
import tom_schipper from '../../assets/images/tom_schipper.jpg'
import bradley_dalton_oates from '../../assets/images/bradley_dalton_oates.jpg'
import jody_stoehr from '../../assets/images/jody_stoehr.jpg'
import amin_yachnes from '../../assets/images/amin_yachnes.jpg'
// import clare_allen from '../../assets/images/clare_allen.jpg'
import aya_hojadova from '../../assets/images/aya_hojadova.jpg'
// import sam_clements from '../../assets/images/sam_clements.jpg'

const members = [
  {
    name: 'Doug Hamilton',
    image: doug_hamilton,
    title: 'Co-Founder, President'
  },
  {
    name: 'Dave Ingram',
    image: dave_ingram,
    title: 'Co-Founder, Vice-President'
  },
  {
    name: 'Will Horn',
    image: will_horn,
    title: 'Program Advisor'
  },
  {
    name: 'Brian Gillespie',
    image: brian_gillespie,
    title: 'Program Advisor'
  },
  {
    name: 'Gavin Coyle',
    image: gavin_coyle,
    title: 'Mentoring & CS'
  },
  {
    name: 'Tom Schipper',
    image: tom_schipper,
    title: 'CFO (Treasurer)'
  },
  {
    name: 'Bradley Dalton-Oates',
    image: bradley_dalton_oates,
    title: 'PM'
  },
  {
    name: 'Jody Stoehr',
    image: jody_stoehr,
    title: 'CRO'
  },
  {
    name: 'Amin Yachnes',
    image: amin_yachnes,
    title: 'Mentoring & CS'
  },
  // {
  //   name: 'Clare Allen',
  //   image: clare_allen,
  //   title: 'Defense Sector (Mantech)'
  // },
  {
    name: 'Aya Hojadova',
    image: aya_hojadova,
    title: 'Marketing & Communications'
  },
  // {
  //   name: 'Sam Clements',
  //   image: sam_clements,
  //   title: 'Non-profit Advisor'
  // }
]

function BoardMembers() {
  return (
    <div className="flex flex-row justify-center flex-wrap gap-4">
      <div className='w-full flex flex-col items-center mt-4'>
        <div className='border-4 border-[#E5C28A] rounded-xl bg-slate-700 m-3 p-4'>
          <h1 className='text-center text-5xl text-[#eee9df] py-2 px-4'>
            Leadership & Staff
          </h1>
        </div>
      </div>
      {members.map((member) => {
        return (
          <div key={member.name} className='border-4 border-[#E5C28A] rounded flex flex-col items-center justify-start gap-1 bg-slate-700 min-w-3/12'>
            <img className='w-full' src={member.image}/>
            <div className='text-xl text-[#eee9df]'>
              {member.name}
            </div>
            <div className='text-md text-[#eee9df] text-center'>
              {member.title}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default BoardMembers

{/* <div className="w-full m-4 p-4 border-4 border-[#E5C28A] rounded flex flex-col items-center gap-1 bg-slate-700">
<img src={image} alt={`banner for ${title}`}/>
<h2 className="text-3xl text-[#eee9df]" >{date}</h2>
<p className="text-lg text-[#eee9df]">{description}</p>
</div> */}