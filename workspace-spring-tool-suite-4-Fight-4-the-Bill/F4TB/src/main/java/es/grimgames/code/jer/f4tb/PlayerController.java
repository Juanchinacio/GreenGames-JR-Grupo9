package es.grimgames.code.jer.f4tb;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PlayerController {

	private List<Player> players = new ArrayList<>();
	
	@RequestMapping(value = "/players", method=RequestMethod.GET)
	public List<Player> getPlayers() {
		loadRanking();
		return players;
	}
	
	@RequestMapping(value = "/players", method = RequestMethod.POST)
	public ResponseEntity<Boolean> addPlayer(@RequestBody Player p) {
		players.add(p);
		p.EscribeFichero(p.getName(), p.getScore());
		return new ResponseEntity<>(true, HttpStatus.CREATED);
	}
	
	@RequestMapping(value = "/players", method = RequestMethod.DELETE)
	public ResponseEntity<Player> deletePlayer(@RequestBody Player p){
		players.remove(p);
		return new ResponseEntity<>(p, HttpStatus.OK);
	}
	
	public void loadRanking(){
		File archivo = null;
	      FileReader fr = null;
	      BufferedReader br = null;

	      try {
	         archivo = new File ("Ranking.txt");
	         fr = new FileReader (archivo);
	         br = new BufferedReader(fr);
	         ArrayList<String> temp = new ArrayList<String>();

	         String linea;
	         while((linea=br.readLine())!=null) {
	            System.out.println(linea);
	        	temp.add(linea);
	         }
	         for(int i = 0; i < temp.size(); i = i + 2) {
	        	 Player p = new Player();
	        	 p.setName(temp.get(i));
	        	 p.setScore(Integer.parseInt(temp.get(i + 1)));
	        	 players.add(p);
	         }
	      }
	      catch(Exception e){
	         e.printStackTrace();
	      }
	}
}
